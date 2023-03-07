import { google } from "googleapis";
import { GoogleAuth } from 'google-auth-library';

/**
 * Updates values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to update.
 * @param {object} valueInputOption Value update options.
 * @param {(string[])[]} _values A 2d array of values to update.
 * @return {obj} spreadsheet information
 */

 
export default async function handler(
    req,
    res
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }

    const body = req.body

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:C1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.guestCount, body.isAttending]
                ]
            }
        });

        return res.status(201).json({
            data: response.data
        })
    }catch (e) {
        console.log("error", e )
        return res.status(e.code).send({message: e.message})
    }

}
