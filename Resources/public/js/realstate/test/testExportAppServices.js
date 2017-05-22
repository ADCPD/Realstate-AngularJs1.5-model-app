/**
 * Created by dhaouadi_a on 09/02/2017.
 */
'use strict';

describe('AbondonnedExportServices', function () {

    var AbondonnedExportServices;
    beforeEach(function () {
        angular.mock.module('exportApp');
        angular.mock.inject(function (_AbondonnedExportServices_) {
            AbondonnedExportServices = _AbondonnedExportServices_;
        });
    });

    // verifie l'existance des methodes utiliser par le service
    it("should have a getAbondonnedExport method", function () {
        expect(AbondonnedExportServices.getAbondonnedExport).to.be.a('function');
    });

    // retourne le nombre de resultat attendu par le json
    it("Should return count", function () {
        count = 0;
        $http.expectJSONP(AbondonnedExportServices.getAbondonnedExport).respond({count: 2});
        AbondonnedExportServices.getAbondonnedExport().then(function (c) {
            count = c;
        });
        $http.flush();
        expect(count).to.be.equal(2);
    });

});

describe('InProcessExportServices', function () {
    var InProcessExportServices;

    beforeEach(function () {
        angular.mock.module('exportApp');
        angular.mock.inject(function (_InProcessExportServices_) {
            InProcessExportServices = _InProcessExportServices_;
        });
    });

    // verifie l'existance des methodes utiliser par le service
    it("should have a getinProcessExport method", function () {
        expect(InProcessExportServices.getinProcessExport).to.be.a('function');
    });


    // retourne le nombre de resultat attendu par le json
    it("Should return count", function () {
        count = 0;
        $http.expectJSONP(InProcessExportServices.getinProcessExport).respond({count: 2});
        InProcessExportServices.getinProcessExport().then(function (c) {
            count = c;
        });
        $http.flush();
        expect(count).to.be.equal(2);
    });

});


describe('FinishedExportServices', function () {
    var FinishedExportServices;

    beforeEach(function () {
        angular.mock.module('exportApp');
        angular.mock.inject(function (_FinishedExportServices_) {
            FinishedExportServices = _FinishedExportServices_;
        });
    });

    // verifie l'existance des methodes utiliser par le service
    it("should have a getinProcessExport method", function () {
        expect(FinishedExportServices.getFinishedExport).to.be.a('function');
    });


    // retourne le nombre de resultat attendu par le json
    it("Should return count", function () {
        count = 0;
        $http.expectJSONP(FinishedExportServices.getFinishedExport).respond({count: 1206});
        FinishedExportServices.getFinishedExport().then(function (c) {
            count = c;
        });
        $http.flush();
        expect(count).to.be.equal(1206);
    });

});
