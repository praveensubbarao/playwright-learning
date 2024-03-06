import { test, expect } from '@playwright/test'
import * as XLSX from 'xlsx'

async function readExcelFile(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        try {
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}
test.describe('deadlink tests', () => {
    test.describe.configure({ mode: 'serial' });

    test('01. collect URIs', async ({ page }) => {    

    });

    test ('02. loop thru excel' , async ({page}) => {

    // Load the Excel file
    const filePath = 'websites.xlsx';
    const data = await readExcelFile(filePath);

        for (const row of data) {
        // Convert the object to a string
        const rowString = JSON.stringify(row);

        // Perform some action with the data
        console.log(rowString)

         // goto page
        const gotouri = JSON.parse(rowString)
        console.log (gotouri.URI) 
        }
    })
})