import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center">
        <div className="max-w-[1200px] mx-auto" >
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div>
                        <h1>
                            Contactez-moi
                        </h1>
                        <p>
                            Suivez sur le LinkedIn <br /> ou emvoyez un Email
                        </p>

                    </div>

                </div>

                <form action="" method="post">
                    <div>
                        <input type="name" name="name" id="name" placeholder="Votre nom" />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Votre email" />
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message" />
                    </div>
                    <div>
                        <button type="submit">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Contact;
