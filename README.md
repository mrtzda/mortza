# تیزر رستار

یک تیزر ۱۲ ثانیه‌ای فارسی با Remotion، هماهنگ با ضرب موسیقی (۱۲۰ BPM).

- `renders/rastar-teaser.mp4` — افقی ۱۹۲۰×۱۰۸۰
- `renders/rastar-teaser-9x16.mp4` — عمودی ۱۰۸۰×۱۹۲۰ (استوری و ریلز)

## اجرا

```bash
npm install
npm run studio          # پیش‌نمایش و ویرایش
npm run render          # خروجی افقی
npm run render:vertical # خروجی عمودی
```

متن‌ها و رنگ‌ها در `src/Teaser.tsx` هستند. لوگوتایپ «رستار» از خطوط شکل‌دهی‌شده‌ی فونت وزیرمتن (`src/mark.json`) ساخته شده و با این دستور بازسازی می‌شود:

```bash
pip install uharfbuzz fonttools
python3 tools/shape_persian.py Vazirmatn-VF.ttf "رستار" --wght 900 --name mark > src/mark.json
```

فونت: Vazirmatn (OFL). موسیقی: قطعه‌ی Shur Pulse در دستگاه شور.
