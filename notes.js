/**
 * Backend:
 * Node js, express,
 * Sequelize - is a library in JS that makes it easy to manage a SQL database; // asset market uses KNEX
 * PostgreSQL - relational database management system; is used as the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications;
 * JSON Web Token for authorization
 */

/**
 * SQL query:
 * SELECT table1.col1, table1.col2, table2.col5
 * FROM table1
 * JOIN table2 ON table1.table2_id = table2.id;
 *
 * knex query: knex.select().join().where().....
 */

/**
 * Frontend:
 * React js
 * React bootstrap
 * axios
 * React router dom - navigation
 * MobX - state management
 */

/**
 * nodemon - automatically restarting the node application when file changes;
 * .sync() - процесс установления согласованности данных между двумя или более базами данных, автоматическое копирование изменений туда и обратно.
 *         - the process of establishing data consistency between two or more databases, automatically copying changes back and forth.
 *
 * static method(static function) - это функции, которые можно вызывать без создания объекта. Мы можем на прямую обратиться к классу и вызывать ту или иную функцию.
 *
 * express-fileUpload - transmitting a file from your computer to another computer.
 *
 * JWT - a string that is divided by dots in 3 parts --> header.payload.signature.
 * payload - we will store there a user's data: id,email and role
 *
 * bcrypt (module) - hashes passwords and do not store them open in the database
 */

/**
 * react-router-dom:
 * Switch - we specify several routes,for example, authorization, registration and shop pages, and if none of these routes work, then the last one specified in that Switch will work
 */

/** The JWT Interceptor intercepts http requests from the React app to add a JWT auth token to the HTTP Authorization header
 *    if the user is logged in and the request is to the React app's API URL ( process. env. REACT_APP_API_URL )
 *
 *  Перехватчик JWT перехватывает HTTP-запросы от приложения React, чтобы добавить токен авторизации JWT в заголовок авторизации HTTP,
 *  если пользователь вошел в систему и запрос направлен на URL-адрес API приложения React ( process. env. REACT_APP_API_URL )
 */
