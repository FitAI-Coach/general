import React, { useEffect, useRef, useState } from 'react';
import * as tmPose from '@teachablemachine/pose';

const TeachableMachinePoseModel = () => {
    const URL = "./my_model/";
    const [model, setModel] = useState(null);
    const [webcam, setWebcam] = useState(null); // Use state for webcam
    const [labelContainer, setLabelContainer] = useState([]);
    const [maxPredictions, setMaxPredictions] = useState(0);

    // Load model and webcam setup
    const loadModel = async () => {
        try {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";
            
            // Load model and metadata
            const loadedModel = await tmPose.load(modelURL, metadataURL);
            setModel(loadedModel);
            setMaxPredictions(loadedModel.getTotalClasses());

            // Setup webcam
            const flip = true;
            const webcamInstance = new tmPose.Webcam(200, 200, flip); // Similar to image version
            await webcamInstance.setup();
            setWebcam(webcamInstance);
        } catch (error) {
            console.error("Error loading model or webcam:", error);
        }
    };

    // When model and webcam are set, start webcam and begin loop
    useEffect(() => {
        if (model && webcam) {
            startWebcam();
        }
    }, [model, webcam]);

    const startWebcam = async () => {
        await webcam.play();
        window.requestAnimationFrame(loop);

        // Attach webcam to DOM
        const webcamContainer = document.getElementById("webcam-container");
        if (webcamContainer && webcam.canvas) {
            webcamContainer.appendChild(webcam.canvas);
        }

        // Initialize label container
        const labels = [];
        for (let i = 0; i < maxPredictions; i++) {
            labels.push("");
        }
        setLabelContainer(labels);
    };

    const loop = async () => {
        if (webcam && webcam.canvas) {
            webcam.update(); // Update the webcam frame
            await predict();
        }
        window.requestAnimationFrame(loop);
    };

    const predict = async () => {
        if (!model || !webcam || !webcam.canvas) return; // Add null check
    
        try {
            const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
            console.log("Posenet output:", posenetOutput); // Debug the posenet output
            
            const prediction = await model.predict(posenetOutput);
            console.log("Prediction result:", prediction); // Debug the prediction output
    
            const updatedLabels = prediction.map(
                (pred) => `${pred.className}: ${pred.probability.toFixed(2)}`
            );
            setLabelContainer(updatedLabels);
    
            drawPose(pose);
        } catch (error) {
            console.error("Error during pose prediction:", error);
        }
    };
    

    const drawPose = (pose) => {
        const ctx = webcam.canvas.getContext("2d"); // Use webcam's canvas context directly
        if (!pose || !ctx) return;
    
        ctx.clearRect(0, 0, webcam.canvas.width, webcam.canvas.height);
        tmPose.drawKeypoints(pose.keypoints, 0.5, ctx);
        tmPose.drawSkeleton(pose.keypoints, 0.5, ctx);
    };    

    return (
        <div>
            <h1>Teachable Machine Pose Model</h1>
            <button type="button" onClick={loadModel}>
                Start
            </button>
            <div id="webcam-container"></div>
            <div id="label-container">
                {labelContainer.map((label, index) => (
                    <div key={index}>{label}</div>
                ))}
            </div>
        </div>
    );
};

export default TeachableMachinePoseModel;
