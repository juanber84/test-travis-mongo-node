'use strict'

const mocha = require('mocha')
const coMocha = require('co-mocha')
const Promise = require('bluebird')
const chai = require('chai')
const assert = chai.assert

coMocha(mocha)

describe("Example describe", function () {

    it("Example spec", function* () {
        var MongoClient = require('mongodb').MongoClient;
        let result = yield new Promise(function (resolve, reject) {
            MongoClient.connect("mongodb://localhost:27017/exampleDb", function (err, db) {
                if (err) reject(err)
                resolve('We are connected')
            })
        })
        assert.equal(result, 'We are connected')
    })

})