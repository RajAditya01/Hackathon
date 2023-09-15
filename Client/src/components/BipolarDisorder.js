import React from 'react';

const BipolarDisorder = () => {
  return (
    <div className="bg-white flex flex-wrap">
      {/* Left Column for Text */}
      <div className="w-full md:w-2/3 p-4">
        <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl text-black bg-purple-200 p-4 mb-4">Understanding Bipolar Disorder: Symptoms, Treatment, and Coping Strategies</h1>
        <p className="text-gray-700 leading-7">
          Bipolar disorder, previously known as manic depression, is a mental health condition characterized by extreme mood swings. These mood swings typically include periods of elevated and irritable mood (mania or hypomania) and periods of depression. This article explores what bipolar disorder is, its symptoms, potential causes, treatment options, and ways to manage the condition effectively.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">What is Bipolar Disorder?</h2>
        <p className="text-gray-700 leading-7">
          Bipolar disorder is a brain disorder that causes unusual shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks. It affects millions of people worldwide and can have a significant impact on their lives.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Symptoms of Bipolar Disorder</h2>
        <p className="text-gray-700 leading-7">
          Symptoms of bipolar disorder can vary widely between individuals. Manic episodes may involve increased energy, impulsive behavior, and euphoria, while depressive episodes may include sadness, loss of interest, and fatigue.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Treatment Options</h2>
        <p className="text-gray-700 leading-7">
          Bipolar disorder is typically treated with a combination of medication, psychotherapy, and lifestyle adjustments. Medications aim to stabilize mood, while therapy helps individuals learn to manage their symptoms effectively.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Coping Strategies</h2>
        <p className="text-gray-700 leading-7">
          Living with bipolar disorder can be challenging, but there are effective coping strategies that individuals can use to manage their condition. These may include creating a structured routine, seeking support from loved ones, and practicing stress-reduction techniques.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Seek Professional Help</h2>
        <p className="text-gray-700 leading-7">
          If you or someone you know is experiencing symptoms of bipolar disorder, it's essential to seek professional help. A mental health expert can provide an accurate diagnosis and create a treatment plan tailored to the individual's needs.
        </p>
      </div>
      
      {/* Right Column for Image */}
      <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="WhatsApp Image 2023-09-14 at 11.48.53.jpg"
          className="max-w-full h-auto mx-auto mb-4 rounded-lg shadow-lg"
          alt="Bipolar Disorder"
        />
      </div>
    </div>
  );
}

export default BipolarDisorder;
