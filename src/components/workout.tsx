/* eslint-disable react/no-unescaped-entities */
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/wlviSgw4mZA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Workout() {
  return (
    <div className="relative h-screen w-full overflow-auto">
      <img
        alt="Athlete"
        className="absolute inset-0 h-full w-full object-cover"
        src="/placeholder.svg"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-screen overflow-auto z-10 flex flex-col justify-between px-6 py-8">
        <div>
          <p className="mb-2 text-sm font-medium text-gray-300">
            Welcome! Today's workout is:
          </p>
          <h1 className="text-3xl font-bold text-white">Kettlebell Fire</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Workout</h2>
            <div>
              <h3 className="text-xl font-semibold text-white">Warm-Up</h3>
              <ol className="list-decimal pl-4 text-gray-300">
                <li>Jump Rope: 2 minutes</li>
                <li>
                  Dynamic Stretches: 5 minutes (focus on shoulders, hips, and
                  hamstrings)
                </li>
                <li>Bodyweight Squats: 2 sets of 10</li>
                <li>Arm Circles: 1 minute</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Workout</h3>
              <p className="text-gray-300">
                Perform the following circuit for 4 rounds. Rest for 1 minute
                between rounds.
              </p>
              <ol className="list-decimal pl-4 text-gray-300">
                <li>Kettlebell Swings: 20 reps</li>
                <li>Goblet Squats: 15 reps</li>
                <li>Kettlebell Push Press (each arm): 10 reps</li>
                <li>Kettlebell Russian Twists: 20 reps (10 each side)</li>
                <li>Kettlebell Deadlifts: 15 reps</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Cool Down</h3>
              <ol className="list-decimal pl-4 text-gray-300">
                <li>Light Jog or Walk: 2 minutes</li>
                <li>
                  Static Stretches: 3 minutes (focus on legs, back, and
                  shoulders)
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Detailed Exercise Descriptions
              </h3>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Kettlebell Swings
                </h4>
                <ul className="list-disc pl-4 text-gray-300">
                  <li>Hold the kettlebell with both hands.</li>
                  <li>
                    Swing it between your legs and then up to shoulder height.
                  </li>
                  <li>Use the momentum from your hips.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Goblet Squats
                </h4>
                <ul className="list-disc pl-4 text-gray-300">
                  <li>Hold the kettlebell at chest level.</li>
                  <li>
                    Perform a squat, keeping your back straight and chest up.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Kettlebell Push Press
                </h4>
                <ul className="list-disc pl-4 text-gray-300">
                  <li>Hold the kettlebell in one hand at shoulder height.</li>
                  <li>
                    Dip your knees and use your legs to help press the
                    kettlebell overhead.
                  </li>
                  <li>
                    Return to the starting position in a controlled motion.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Kettlebell Russian Twists
                </h4>
                <ul className="list-disc pl-4 text-gray-300">
                  <li>
                    Sit on the floor with your knees bent and feet flat, holding
                    the kettlebell with both hands in front of your chest.
                  </li>
                  <li>
                    Engage your core and lean back slightly, lifting your feet
                    off the ground.
                  </li>
                  <li>
                    Twist your torso to the right, rotating the kettlebell to
                    the side.
                  </li>
                  <li>
                    Twist back to the center, then rotate to the left side.
                  </li>
                  <li>
                    Continue alternating sides for the desired number of reps.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Kettlebell Deadlifts
                </h4>
                <ul className="list-disc pl-4 text-gray-300">
                  <li>
                    Stand with your feet shoulder-width apart, holding the
                    kettlebell with both hands.
                  </li>
                  <li>
                    Hinge at the hips, pushing your butt back, and lower the
                    kettlebell towards the floor.
                  </li>
                  <li>Keep your back straight and engage your core.</li>
                  <li>
                    Return to the starting position by driving through your
                    heels and squeezing your glutes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
