/**
 * ApiError - class to handle error
 * 
 * @message the message you want to be added
 * @statusCode the statuscode of the opeations
 * @operational this means this operation is predictable or not
 * 
 * Return : void class 
*/

class ApiError extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode=statusCode;

        this.status=`${statusCode}`.startsWith(4)?'fail' :'error';
        this.operational=true;
    }
}

module.exports=ApiError