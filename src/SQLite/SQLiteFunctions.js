import React from 'react';
import * as SQLite from 'expo-sqlite';

const insertNewUser = ({ username, password, email }) => {
  global.db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO UserLocal (username,password) VALUES (${username},${password})`
    ); // end executeSQL
  }); // end transaction
};

export default insertNewUser;
