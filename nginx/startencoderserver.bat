%~d0
cd  /D %cd%
spawn-fcgi -F 1 -a 0.0.0.0 -p 8030 -f ..\..\ffmpeg\bin64\NELVSerEncoder.exe 
pause