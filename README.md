# blog website

> Static website to showcase travel and blog posts.

## Setup

```
npm install
```

## Dev mode

```
npm run dev
```

App will be live at [http://localhost:3000](http://localhost:3000) and hot reload on code change.

## Production readiness

```
npm run build
```

```
npm run export
```

```
npm run preview
```

App will be live at: [http://localhost:8080](http://localhost:8080)

## Export to S3

```
aws s3 cp --recursive out s3://<your_s3_bucket>
```

This command will copy the content of `out` folder into an AWS S3 bucket.

Make sure to:
- setup your bucket as a `static website host` bucket
- enable `public access` to the bucket content

The website will be live at: `http:/<your_s3_bucket>.s3-website-<your_s3_region>.amazonaws.com/`