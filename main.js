/**
 * Convert an array of integers into an array of strings representing the phonetic equivalent of the
integer.
 * @param  {Array[Integer]} nums Array of integers
 * @return {Array[String]}       Array of phonetic equivalent strings corresponding to the input array
 */

var dict = {0: "Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine"}

function printPhonetic(){
    var output_str = "";
    var return_arr = []
    var array_length = arguments[0].length
    for (var i = 0; i<array_length; i++){
        var curr_string = ""
        var curr_num = arguments[0][i]
        if (curr_num == 0){
            curr_string = "Zero"
        }
        while (curr_num > 0){
            var digit_string = dict[curr_num%10]
            curr_string = digit_string.concat(curr_string)
            curr_num = Math.trunc(curr_num/10)
        }
        output_str = output_str.concat(curr_string)
        return_arr.push(curr_string)

        if (i<array_length-1){
            output_str = output_str.concat(",")
        }
    }
    console.log(output_str)
    return return_arr
}

printPhonetic(process.argv.slice(2))
