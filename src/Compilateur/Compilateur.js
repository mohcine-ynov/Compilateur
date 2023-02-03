import React from 'react';
import './compilateur.css';
import axios from 'axios';

class Compilateur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stdout: "Compiled code will appear here !",
        }

    }

    optionsForPost = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: { base64_encoded: 'true', fields: '*' },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '3ab6f7ab76msh2b87d564d8ff6b0p1e6003jsnb21732a1a78a',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        // data: { "language_id": 52, "source_code": "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=", "stdin": "SnVkZ2Uw" }
    };

    codeToCompileEncoded;

    handleSubmit = (event) => {
        event.preventDefault();
        const codeToCompile = event.target.elements.codeToCompile.value;
        this.optionsForPost.data = {
            "language_id": 52,
            "source_code": window.btoa(codeToCompile),
            // "stdin": "SnVkZ2Uw"
        };

        // console.log(this.options);
        // console.log("code to compile : " + codeToCompile);
        // console.log("encoded code : " + codeToCompileEncoded);

        //sending the code to get the token
        axios.request(this.optionsForPost).then((response) => {
            var optionsForGet = {
                method: 'GET',
                // url: 'https://judge0-ce.p.rapidapi.com/submissions/415414eb-f565-4fcc-a8e1-2a284152d504',
                params: { base64_encoded: 'true', fields: '*' },
                headers: {
                    'X-RapidAPI-Key': '3ab6f7ab76msh2b87d564d8ff6b0p1e6003jsnb21732a1a78a',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                }
            };
            optionsForGet.url = "https://judge0-ce.p.rapidapi.com/submissions/" + response.data.token;

            //sending the token to get the output
            axios.request(optionsForGet).then((response) => {
                this.setState({
                    stdout: window.atob(response.data.stdout),
                });

            }).catch(function (error) {
                console.error(error);
            });

        }).catch(function (error) {
            console.error(error);
        });



    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="codeToCompile"></textarea><br />
                    <button type="submit">Submit</button>
                </form>

                <p>{this.state.stdout}</p>
            </div>

        );
    }
};

export default Compilateur;