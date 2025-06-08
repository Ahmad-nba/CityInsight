# spec
✅ Layout: Tailwind-based responsive structure

✅ City search → routing (/kampala, /new-york)

✅ Weather, time, news fetch + display

✅ Add city image as background

✅ Loading + error states

✅ Deploy to Vercel

## user journey.
    user accesses the app, searches for a desired city and they get the feedback
        the feedback is the weather currently, time zone, news in that area.

## APIs
| Feature    | API                        | Key Params              | API Key?   |
| ---------- | -------------------------- | ----------------------- | ---------- |
| Weather    | OpenWeatherMap             | `q={city}&units=metric` | ✅ Yes      |
| Time       | WorldTimeAPI OR TimeZoneDB | `timezone` or `lat/lon` | ✅ For TZDB |
| News       | NewsAPI.org                | `q={city}&language=en`  | ✅ Yes      |
| City Image | Unsplash API               | `query={city}`          | ✅ Yes      |

## iterations ideas.
    using a zustand library we can store state and favourite cities for a user. 