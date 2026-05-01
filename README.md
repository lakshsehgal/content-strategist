# Neuroid — Content Strategist Application Page

Single-page application form for the Content Strategist hiring page.
Same design language as `mediabuyer-neuroid` (dark theme, lime accent, Syne + DM Sans).

## Files
- `index.html` — landing page + application form
- `apps-script.gs` — Google Apps Script template that writes form responses to a Google Sheet
- `README.md` — this file

## Connect the form to a Google Sheet (Apps Script)

1. Create a new Google Sheet. In **Row 1**, paste these column headers in this exact order:

   ```
   timestamp | full_name | email | phone | city | linkedin | role_type | experience | company | tools | platforms | portfolio | resume | d2c_experience | created_content | standout | fav_content | pitch | why_neuroid | wfo_delhi | current_ctc | expected_ctc | notice_period | additional_info
   ```

2. In the sheet, open **Extensions → Apps Script**.
3. Delete the default `Code.gs` content and paste the contents of `apps-script.gs`.
4. Click **Save**.
5. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy** and authorize when prompted.
6. Copy the **Web app URL** that ends in `/exec`.
7. Open `index.html` and replace this line:
   ```js
   const APPS_SCRIPT_URL = 'REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL';
   ```
   with your Web app URL.

That's it. Submissions append a new row to the active sheet.

### Updating the script later
If you change the script, you must redeploy:
**Deploy → Manage deployments → (pencil icon) → Version: New version → Deploy**.
The URL stays the same.

## Deploy the page
- Drop `index.html` into any static host: GitHub Pages, Vercel, Netlify, Cloudflare Pages.
- For GitHub Pages: push to `main`, Settings → Pages → Source: `main` / root.
