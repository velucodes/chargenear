# ChargeNear: EV Charging Station Finder

Course: U21CS501 Web Technologies (lab U21CS504), LWP Review 01
Industry: Electric mobility and clean energy infrastructure
Stack: HTML5, CSS3, vanilla JavaScript (no frameworks, no backend)

## Pages

| File | Purpose | Main client-side features |
|------|---------|---------------------------|
| `index.html` | Home | Pincode search with validation, live stats from data, redirect with query string |
| `stations.html` | Station directory | Filters (pincode, city, connector, speed, availability), sorting, reads URL query parameters, cards built with DOM methods |
| `book.html` | Slot booking | 11-field validated form, dependent dropdowns, vehicle number regex, date/time rules, receipt |
| `pricing.html` | Tariffs and calculator | Live cost and time calculator with input validation |
| `contact.html` | Feedback / suggest a station | Conditional field, character counter, validation |

Shared files: `css/style.css`, `js/data.js` (station data), `js/validate.js` (validators), `js/main.js` (dark mode, active nav link).

## Validation rules (book.html)

- Name: letters, spaces, `. ' -`, 2 to 40 characters
- Mobile: `^[6-9][0-9]{9}$`
- Email: `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`
- Vehicle number: `^[A-Z]{2}[0-9]{2}[A-Z]{1,3}[0-9]{4}$` (spaces and hyphens ignored), e.g. TN66AB1234
- Vehicle type controls which connectors are offered (two-wheelers: Bharat AC-001 and Type 2; cars: CCS2, CHAdeMO, Type 2), and the list is narrowed further to what the chosen station has
- Station must support the vehicle type
- Duration: 15 to 240 minutes in steps of 15
- Date: today to 7 days ahead; time: 06:00 to 22:00, not in the past, and the session must end by 22:00
- Terms checkbox must be ticked

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`. Serving over HTTP (instead of opening the file) is better for the Network tab, because `file://` pages do not show real HTTP requests.

## Notes

- Station data and prices are made-up sample data for the demo. Locations are illustrative.
- Booking and contact forms do not send anything to a server (LWP Review 01 is client-side only). A later review can add PHP/Servlet and a database.
