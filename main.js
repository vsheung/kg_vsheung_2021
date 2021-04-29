/**
 * FUNCTION DESCRIPTION: Converts an array of integers into an array of strings representing the phonetic equivalent of each
given integer.
 * @param  {Array.<Integer>} nums Array of integers
 * @return {Array.<String>}       Array of phonetic equivalent strings corresponding to the input array
 */

// Dictionary with digit to string mapping
var dict = {0: "Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine"}

function printPhonetic(){

    // Output string that will be printed
    var output_str = "";

    // Output array that will be returned
    var return_arr = []

    // Length of the input array
    var array_length = arguments[0].length

    // Iterate through each integer in the array
    for (var i = 0; i<array_length; i++){

        // Initialize empty string for ith integer, we'll call this Current String 
        var curr_string = ""

        // Extract ith integer from array
        var curr_num = arguments[0][i]

        // Special case: if initial number is 0, just append "Zero" to returned array
        if (curr_num == 0){
            curr_string = "Zero"
        }

        // Extract each digit from current integer, find corresponding string from dictionary and concatenate to Current String
        while (curr_num > 0){
            var digit_string = dict[curr_num%10]
            curr_string = digit_string.concat(curr_string)
            curr_num = Math.trunc(curr_num/10)
        }

        // Concatenate Current String to output array and output string
        output_str = output_str.concat(curr_string)
        return_arr.push(curr_string)

        // Adding commas to output string 
        if (i<array_length-1){
            output_str = output_str.concat(",")
        }
    }
    console.log(output_str)
    return return_arr
}

// Calls function with array of integers as the input parameter
printPhonetic(process.argv.slice(2))
