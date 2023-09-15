import React from 'react';

const Schizophrenia = () => {
  return (
    <div className="bg-white flex flex-wrap">
      {/* Left Column for Text */}
      <div className="w-full md:w-2/3 p-4">
        <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl text-black bg-blue-200 p-4 mb-4">Understanding Schizophrenia: Symptoms, Treatment, and Support</h1>
        <p className="text-gray-700 leading-7">
          Schizophrenia is a complex and challenging mental disorder that affects how a person thinks, feels, and behaves. It often causes a range of symptoms that can be confusing and distressing. This article explores what schizophrenia is, its symptoms, potential causes, treatment options, and ways to support individuals living with schizophrenia.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">What is Schizophrenia?</h2>
        <p className="text-gray-700 leading-7">
          Schizophrenia is a chronic brain disorder that may result in a combination of hallucinations, delusions, disorganized thinking, and abnormal social behavior. It can be a lifelong condition that requires ongoing treatment and support.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Symptoms of Schizophrenia</h2>
        <p className="text-gray-700 leading-7">
          Schizophrenia symptoms can vary widely, but they often include hallucinations (seeing or hearing things that others don't), delusions (strongly held false beliefs), disorganized thinking, and changes in emotional expression and behavior. Early intervention is crucial in managing these symptoms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Treatment Options</h2>
        <p className="text-gray-700 leading-7">
          Treatment for schizophrenia typically involves a combination of antipsychotic medications, therapy, and support services. Medication can help manage symptoms, while therapy (such as cognitive-behavioral therapy) can assist individuals in coping with the challenges of the disorder.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Support and Understanding</h2>
        <p className="text-gray-700 leading-7">
          Individuals with schizophrenia benefit greatly from understanding and supportive environments. Family and friends can play a vital role in providing emotional support and encouraging treatment adherence.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Seek Professional Help</h2>
        <p className="text-gray-700 leading-7">
          If you or someone you know is experiencing symptoms of schizophrenia, it's essential to seek professional help. A mental health expert can provide an accurate diagnosis and create a treatment plan tailored to the individual's needs.
        </p>
      </div>
      
      {/* Right Column for Image */}
      <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="schizophrenia-image.jpg"
          className="max-w-full h-auto mx-auto mb-4 rounded-lg shadow-lg"
          alt="Schizophrenia"
        />
      </div>
    </div>
  );
}

export default Schizophrenia;

