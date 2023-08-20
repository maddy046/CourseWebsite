import React, {useEffect} from "react";

const Contact=()=>{

    useEffect(()=>{
        document.title="contact us";
      }, []);

    return(
        <>
            <p className="text-center">This is the contact us page</p>
        </>
    );
}

export default Contact;