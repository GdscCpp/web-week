## Web Week Repo

This is the repository for the GDSC x Fast Web-Week demo.

## Next.js Frontend

To run the frontend, run the following in the root directory

```bash
cd frontend & npm run dev
```

## Express.js Backend

```bash
cd backend & npm run dev
```

## Docker

To build the docker image, run the following:

```bash
docker build -f .docker/build.dockerfile -t  web-week .
```

And to run it, run the following:

```bash
docker run -it -p 3000:3000 -p 8000:8000 --init web-week
```
