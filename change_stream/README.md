# Change Stream

## Setup environment

First of all, you need to have a working replicaset. You can use Atlas cluster or run in your machine using docker-compose. Refer [here](https://github.com/fk-mongodb-workshops/04_docker/tree/main/02_replicaset) to setup a replicaset in your own machine using docker-compose.

## Execute the program
### Install Node packages
```
npm i
```
### Run the watcher
```
node 01_watch.js
```
### Run the insert
```
node 02_insert.js
```
Then see the changes printed in the watcher terminal
### Run the update
```
node 03_update.js
```
Then see the changes printed in the watcher terminal
### Run the delete
```
node 04_delete.js
```
Then see the changes printed in the watcher terminal
