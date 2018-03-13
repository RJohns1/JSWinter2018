/*
 * Please put your name here
 * Name: Ryan Johns
 */


/** Points: 10
 * Write JavaScript code that creates a JavaScript object 
 * with properties for first and last name as well as student id. 
 * For the values, use your own name and student id.
 * first and last must be a type of string
 * id must be a type of number
 * 
 * @return {object} JSON
 */
function studentInfo() {
    var result = {};
    result.first = 'Ryan';
    result.last = 'Johns';
    result.id = 001379358;

    return result;
}


/** Points: 10
 * Given the html <div id="main"><p class="yourname"></p></div> 
 * put your name in the paragragh and return your name.
 * 
 * @return {String} Your Name
 */
function insertNameIntoDom() {
    let p = document.querySelector('.yourname');
    p.textContent = "Ryan";

    return p.textContent;
}


/** Points: 20
 * Create a loop that will populate an array with random numbers.
 * The array size should be a random number between 10 and 20.
 * 
 * @return {array}
 */
function randomArray() {
    var randarray = [];
    randarray.length = Math.floor(Math.random() * 10) + 10;
    for (var i = 0; i < randarray.length; i++) {
        let result = Math.ceil(Math.random() * 10) + 10;
        randarray[i] = result;
        return randarray;
    }
}


/** Points: 20
 * The function returns the string repeated the number of times specified.
 * @param {String} str 
 * @param {Number} times 
 * 
 * @return {String} strRepeated
 */
function stringRepeat(str, times) {
    
}


    /** Points: 20
     * Given the html <input type="text" name="email" />
     * The function will check the value of a field.  
     * If it is empty add the class "error" to the field
     * if it is not empty remove the class error from the field.
     * 
     * @return {VOID}
     */
    function validateInputField() {
        let text = document.querySelector('input');
        if (text.value === "") {
            text.classList.add('error');
        } else {
            text.classList.remove('error');
        }
    }


    /** Points: 20
     * Given the html <div id="main"><p class="yourname"></p></div>
     * When the div is clicked on 
     * the style property color is changed to red 
     * 
     * @return {VOID}
     */
    function colorClickRed() {
        let div = document.querySelector('#main');
        div.addEventListener('click', changeMe);

        function changeMe() {
            div.style.color = 'red';
        }
    }


    /** Points: 10
     * Check an array matrix of 4x4 to return the largest number found.
     * example of the array
     * [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]]
     * and 
     * [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]]
     * 
     * @param {Array} arr 
     * 
     * @return {Number} largest
     */
    function largestNumberOfFourArrays(arr) {


    }
