# Diary
## Getting started
Firstly, install NodeJS LTS on your machine. Then, go into the `/server` and `/client` directories and run the following
in both:
```bash
$ npm i
```

Then, get a Postgres database URL from somewhere like Supabase, and add the following to a `.env` file in the `/server`
directory:
```ini
DB_URL=[YOUR_URL]
PORT=3000
```
Then, in the `/server` directory run:
```bash
$ npm run setup-db
```

Now, go into the `/server` and `/client` directories and run:
```bash
$ npm run dev
```

You should now have a diary app available at http://localhost:5173! To test it out, use these default login credentials:
```
Username: default
Password: password
```
Registration will be available Soon:tm:
