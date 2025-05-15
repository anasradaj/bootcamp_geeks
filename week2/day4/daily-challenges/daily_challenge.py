import requests
import psycopg2
import random

# Database connection details
DB_NAME = "countries"
USER = "postgres"  
PASSWORD = "Anas/1996." 
HOST = "localhost"

URL_API = "https://restcountries.com/v3.1/all"

# Get the data (counteries) from URL_API
def get_country_api():
    response = requests.get(URL_API)
    response.raise_for_status()
    data = response.json()
    return data

# Connect to db 
def connect_db():
    connection = None
    try:
        connection = psycopg2.connect(host=HOST, dbname=DB_NAME, user=USER, password=PASSWORD)
        return connection
    except psycopg2.Error as e:
        print(f"Error connecting to database: {e}")
        if connection:
            connection.close()
        return None

# insert data to db 
def insert_data_db(connection, country):
    cursor = connection.cursor()
    query = """
    INSERT INTO countries (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s);
    """
    try:
        name = country['name']['common']
        capital = country.get('capital', [None])[0] 
        flag = country['flags']['png']
        subregion = country.get('subregion')
        population = country.get('population')

        cursor.execute(query, (name, capital, flag, subregion, population))
        connection.commit()
        print(f"Inserted: {name}")
    except psycopg2.Error as e:
        connection.rollback()
        print(f"Error inserting {country['name']['common']}: {e}")
    finally:
        cursor.close()


if __name__ == "__main__":
    countries_data = get_country_api()

    if countries_data:
        random_countries = random.sample(countries_data, min(10, len(countries_data)))

        connection = connect_db()
        if connection:
            for country in random_countries:
                insert_data_db(connection, country)

            connection.close()
            print("10 random countries successfully add to the database.")
        else:
            print("Failed to connect to the database.")
    else:
        print("Failed to retrieve country data from the API.")