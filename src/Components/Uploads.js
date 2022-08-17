import React, { useRef } from "react"
import S3 from "react-aws-s3"
function Upload(){
    const fileInput = useRef();
    const handleClick = event =>{
        event.preventDefault();
        let file=fileInput.current.files[0];
        let newFileName=fileInput.current.files[0].name;
        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            
            region: process.env.REACT_APP_REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        };


        const ReactS3Client = new S3(config);
        ReactS3Client.uploadFile(file,newFileName).then(data =>{
            console.log(data);
            if(data.status === 204){
                alert("Sucess");
            }
            else{
                alert("Dobbindi poo");
            }
        });

    };

    return(
        <>
            <form className="upload-steps" onSubmit={handleClick}>
                <label>Uplaod File :
                <input type="file" ref={fileInput} />
                </label>
                <br>
                </br>
                <button type="submit">Upload</button> 
            </form>

        </>
    );
}

export default Upload;