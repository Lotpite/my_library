import $ from '../core';

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children]; // HTML Collection превращается в массив

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);

};

$.prototype.find = function (selector) {

    let numberOfItems = 0, // общее количество
        counter = 0; // количество записаных

    const copyObj = Object.assign({}, this); // создаем копию обьекта

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector); // создаем массив селекторов
        if (arr.length == 0) {
            continue; // пропускаем если нет елементов
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j]; // this ссылается к новому обьекту.  перезаписываем ел по номерам
            counter++;
        }

        numberOfItems += arr.length; // меняем общее кол-во елементов на полученное
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function (selector) {

    let counter = 0;
    const clos = document.createElement('div');

    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) {
            
                clos.classList.add(selector.slice(1, selector.length));
                document.body.appendChild(clos);
                clos.appendChild(this[i]);
                this[i] = this[i].closest(selector);
            counter++;
   
        } else {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function () {

    let numberOfItems = 0, // общее количество
        counter = 0; // количество записаных

    const copyObj = Object.assign({}, this); // создаем копию обьекта

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children; // создаем массив из потомков родителя

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1; // меняем общее кол-во елементов на полученное - 1(совпавший)
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};