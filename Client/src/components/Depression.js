import React from 'react';

const Depression = () => {
  return (
    <div className="bg-white flex flex-wrap">
      {/* Left Column for Text */}
      <div className="w-full md:w-2/3 p-4">
      <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl text-black bg-blue-200 p-4 mb-4">Understanding and Conquering Depression: A Comprehensive Guide</h1>
        <p className="text-gray-700 leading-7">
          Depression is a chronic feeling of emptiness, sadness, or inability to feel pleasure that may appear to happen for no clear reason. It is distinct from grief and other emotions.
          It can undermine a person’s relationships, make working and maintaining good health very difficult, and in severe cases, may lead to suicide. In fact, depression contributes to nearly 40,000 suicides in the United States each year.
          It can affect adults, adolescents, and children. This article examines what depression is and what causes it, as well as types of depression, treatment, and more.
          Depression is a mood disorder that causes persistent feelings of sadness, emptiness, and loss of joy. It is different from the mood fluctuations that people regularly experience as a part of life.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">What causes depression?</h2>
        <p className="text-gray-700 leading-7">
          Fighting depression is a complex and often ongoing process that can require a combination of approaches. It's important to note that I am not a mental health professional, but I can provide you with some general suggestions and strategies that people often find helpful in managing and overcoming depression. Remember to consult with a mental health expert for personalized guidance.
        </p>

        {/* Add your list of solutions here */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Seek Professional Help</h2>
        <p className="text-gray-700 leading-7">
          The first step in addressing depression is to consult a mental health professional, such as a therapist, counselor, psychiatrist, or psychologist. They can provide a proper diagnosis and recommend appropriate treatments, which may include therapy, medication, or a combination of both.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Therapy</h2>
        <p className="text-gray-700 leading-7">
          Different types of therapy, such as cognitive-behavioral therapy (CBT), dialectical-behavior therapy (DBT), and interpersonal therapy (IPT), have been shown to be effective in treating depression. Therapy can help you identify and change negative thought patterns and behaviors.
        </p>

        {/* Add more solutions here as needed */}
      </div>
      
      {/* Right Column for Image */}
      <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="WhatsApp Image 2023-09-14 at 11.47.27.jpg"
          className="max-w-full h-auto mx-auto mb-4 rounded-lg shadow-lg"
          alt="Depression Image"
        />
      </div>
    </div>
  );
}

export default Depression;




