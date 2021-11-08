import React, { useState } from 'react';
import Faqcard from '../../Components/FaqCard/Faqcard';
import { FaqData } from '../../Data/faqPageData';

const AnswerQuestion = () => {

    const [activeFaq,setActiveFaq] = useState("")

    return (
        <section id="Faq-answer-question">
            <div className="container-xxl">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 mx-auto">
                    {FaqData.map((data ,index) => (
                        <Faqcard activeFaq={activeFaq} setActiveFaq={setActiveFaq} index data={data} />
                    ))}
                </div>

                <div className="mt-5 text-center">
                    <h1 className="text-bold display-3 text-center fw-bolder theme-primary">Still Have Any Question?</h1>
                    <btn className="btn btn-theme-primary-outline fs-5 fw-bold px-4 py-3 border-3 mt-3">Contact Us Now</btn>
                </div>
            </div>
        </section>
    );
};

export default AnswerQuestion;