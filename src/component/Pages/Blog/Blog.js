import React from 'react';

const Blog = () => {
    return (
        <div className='container py-4'>
            <div>
            <h3>What is the difference between authorization and authentication?</h3>
            <p>Ans: Authentication is validating your credentails like User Name or User ID and your Passoword to verify your identity. In public and private networks the system have like authentication. It's can give some more impormation using that website if you're login in. It have many way to authentication on a website. <br /> Authorization, on the other hand, occurs after your identity is successfully authenticated by the system, which ultimately gives you full permission to access the resources such as information, files, databases, funds, locations, almost anything.


  </p>
            </div>
            <div>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Ans: Firebase Authentication is necessary to grant read/write privileges to your users via security rules. We haven't covered security rules yet, but just know that security rules rely on a users authentication status. It have many way to authenticatioh like User can do it using Email and Password or Sign in another google or any Sovial accounts. And Firebase is also given Free hosting, We can host our website on firebase. </p>
            </div>
            <div>
            <h3>What other services does firebase provide other than authentication?</h3>
            <p>Ans: Firebase provide many service. It's provide Cloud messaging means Everyone needs notifications in their mobile applications in one way or another. Also provide - Dynamic Link , Prdictions, Google Analytics, Remote Config etc. Dynamic Link -This service is majorly used to generate deep links that redirect user traffic to your landing page, website, or mobile applications. Google Analytics - service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.</p>
            </div>
        </div>
    );
};

export default Blog;