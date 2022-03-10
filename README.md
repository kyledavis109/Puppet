# Puppet

## About

This project is a web scraping app that scrapes data from a top music charts webpage and saves the data to a database. Puppeteer is used to scrape web data and POSTGRES is used to save the scraped data.

#### Installation

1. To get started you will need to install Node.js on your computer. [Node.js Download](https://nodejs.org/en/download/).

2. Next you will need to install Git to pull the code from my Github repository. [Git Download](https://git-scm.com/downloads).

3. You will also need to have a Github account as well as a SSH Key. [SSH Key Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

4. A POSTGRES database is also required for this application. Download and installation help is available at [POSTGRES Download](https://www.postgresql.org/download/).

5. Open your POSTGRES SQL shell command terminal and specify all credentials for your database. Create a new table in your database with the commands:

```

CREATE TABLE musicCharts (
chartPosition INT NOT NULL,
song VARCHAR(100) NOT NULL,
artist VARCHAR(100) NOT NULL,
label VARCHAR(100) NOT NULL );

```

6. Once you have installed everything and are setup, you are ready to clone the repository. To clone the repository, open up a terminal and run `git clone https://github.com/kyledavis109/Puppet` to clone the repository into a folder on your computer.

7. A `.env` file to store an environmental variable for the database is required. This variable will be sensitive information so it's best to not share it with anyone. Create a `.env` file in the root directory of this file and store the environmental variable as follows:

```

CONNECTION_STRING=

```

8. Your `CONNECTION_STRING` .env variable is what will connect Node.js to your POSTGRES database. Your connection string should be `postgressql://postgres:{your POSTGRES password}@localhost{port your POSTGRES database is running on}/postgres`.

9. You will need a few npm packages installed to run this app. To install the packages, in the terminal navigate to the root folder of the repository and then run `npm i`.

***Congratulations! You've completed installation!***

#### To Start Application

1. In a terminal, navigate to the root folder of the repository and run `node dataBase`.

2. After running this command check your postgres database and the scraped data should appear in your musicCharts table!

### Support

If you need any help along the way getting this app started, please contact me by email at kyledavis109@gmail.com.