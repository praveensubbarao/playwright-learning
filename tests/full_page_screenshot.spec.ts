import { test, expect } from '@playwright/test'

test ('screen shot basic', async ({page}) => {
    // goto homepage
    await page.goto('https://www.care.com/')

    // take full screenshot with adding unique timestamp to the name
    await page.screenshot({ path: 'screenshot'+ Date.now() +'.png', fullPage: true })

    // click by text
    await page.click("text=Log in")

    // take full screenshot with adding unique timestamp to the name
    await page.screenshot({ path: 'screenshot'+ Date.now() +'.png', fullPage: false })
})