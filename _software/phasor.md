---
title: 'Phasor-based localization'
collection: software
date: 2017-12-22
papercite: 'Martens et al., "Phasor based single-molecule localization microscopy in 3D (pSMLM-3D): An algorithm for MHz localization rates using standard CPUs" (2017), Journal of Chemical Physics'
doi: '10.1063/1.5005899'
github: 'https://github.com/kjamartens/thunderstorm'
installation_instructions: 'From ImageJ, run update, and select 'HohlbeinLab' from the update sites. Then run ThunderSTORM and select the phasor-based sub-pixel fitting routine.'
abstract: Phasor-based sub-pixel localization is a very fast, model-free, 2D and 3D single-molecule localization algorithm that can easily reach millions of localization positions calculated every second and standard CPUs. Its accuracy is in line with Gaussian-based fitting routines.

---

<h2> Abstract </h2>
<p align= "justify">
We present a fast and model-free 2D and 3D single-molecule localization algorithm that allows more than 3 × 106 localizations per second to be calculated on a standard multi-core central processing unit with localization accuracies in line with the most accurate algorithms currently available. Our algorithm converts the region of interest around a point spread function to two phase vectors (phasors) by calculating the first Fourier coefficients in both the x- and y-direction. The angles of these phasors are used to localize the center of the single fluorescent emitter, and the ratio of the magnitudes of the two phasors is a measure for astigmatism, which can be used to obtain depth information (z-direction). Our approach can be used both as a stand-alone algorithm for maximizing localization speed and as a first estimator for more time consuming iterative algorithms.
