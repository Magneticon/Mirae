# Mirae
Mirae / ASCOM Project - Windowing Feature for 21st century.

**NOTE: This is still ongoing project. It is released for research purposes only.**

This project was too ambitious in it's initial scope - to create a GUI windowing system, which would be running as interface to the underlying UNIX/Linux/Windows operating system and will be accessible remotely thru a web browser.

To have an operating system / platform agnostic graphical user interface.

Such project was worked on between 2014 until 2019, however with advancement in web browser technologies (especially adding more restrictive CORS policies) and Mozilla Firefox dropping support for Windows XP with Firefox 52esr version, the project was stalled, as it was incompatible with more modern browsers.

However, since 2025, the project has been resumed by carefully extracting the VIEWS system code (graphical windowing platform running on top of text-based ASCOM system) and by adding new features, making it to work with new and modern browsers while still maintaining compatibility with Mozilla Firefox 52esr (so, you can run it in Windows XP perhaps...).

It is still work in progress - the ASCOM part (command prompt interface) has still not been ported yet. However, with the current windowing system and external application support, it can already act as an application manager and software ecosystems can be successfully built on the platform by leveraging the windowing GUI API (GUISHELL).

<img width="1920" height="1080" alt="mload" src="https://github.com/user-attachments/assets/dd833656-6407-4179-9b64-4b99948db3b3" />
<img width="1920" height="1080" alt="mload2" src="https://github.com/user-attachments/assets/e3c8f112-d662-44a9-b371-27d35b4c3045" />
<img width="1920" height="1080" alt="mload3" src="https://github.com/user-attachments/assets/3282ed17-4434-49d9-9ff2-1184152f3b05" />
<img width="1920" height="1080" alt="m101" src="https://github.com/user-attachments/assets/88a18e05-0cef-4dd8-8e46-9a07cdee6d42" />

To edit various system behavior & install new applications (you can import them as custom JavaScript and CSS files), edit settings in default.js file.

<img width="1920" height="1080" alt="Mirae_install_prog" src="https://github.com/user-attachments/assets/c03bf913-0041-4416-80c5-5f5059c9fbb1" />

You can create your own program very easily, leveraging methods from GUI.js & GFRAME.js. There is no documentation for it yet, but you can explore example applications in MIRAE/MY_PROGRAMS directory and you can check the code in MIRAE/LIB/GUI.js & MIRAE/LIB/GFRAME.js scripts for useful methods (class Element and methods extending it / or extending ElObj class will be the most useful).

<img width="1920" height="1080" alt="Mirae_example_prog" src="https://github.com/user-attachments/assets/ddb2c8d6-5d64-4b8e-8f98-22c10551ac2f" />

Other screens from Mirae:

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/9c11c51f-6d1e-447a-99d9-54a1c58fd817" />
<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/3a9d57bf-5314-45b6-ba34-222fdc0b549a" />
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/86c4e5cf-d04e-425d-ab80-af45ae260065" />
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/3428b9cc-f3e0-447d-a6be-bf8359ed6fb1" />
<img width="1920" height="1080" alt="5" src="https://github.com/user-attachments/assets/16dc04f3-70d2-404a-bd21-4a6c4a0151ee" />
<img width="1920" height="1080" alt="6" src="https://github.com/user-attachments/assets/c2e7bb1d-b1c4-4711-a321-cc89b9042637" />
<img width="1920" height="1080" alt="7" src="https://github.com/user-attachments/assets/6d08383e-8633-4ab0-afd3-324ec2a60d96" />
