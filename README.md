# EvilCrowRF_Custom_Firmware

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y1L3OUQ)

# Preview

<div align="center">
  <a href="https://www.youtube.com/watch?v=Pc-R-e6jsEY"><img src="https://i.imgur.com/ypR4gJR.png" alt="IMAGE ALT TEXT"></a>
</div>

<br>

# Summary

<li><strong><a href="#introduciton">Introduction</a></strong></li>
<li><strong><a href="#firmware">Firmware</a></strong></li>
<ul>
<li><a href="#record">1) Record</a></li>
<li><a href="#transmit">2) Transmit</a></li>
<li><a href="#saved">3) Saved</a></li>
<li><a href="#jammer">4) Jammer</a></li>
<li><a href="#scanner">5) Scanner</a></li>
<li><a href="#bruteforcer">6) Bruteforcer</a></li>
<li><a href="#cc1101">7) CC1101 Settings</a></li>
<li><a href="#kaiju">8) Kaiju Analyze</a></li>
<li><a href="#rolling">9) Kaiju Rolling Codes</a></li>
<li><a href="#rolljam">10) Rolljam Attack</a></li>
<li><a href="#rollback">11) Rollback Attack</a></li>
<li><a href="#logs">12) ECRF Logs</a></li>
<li><a href="#ecrf">13) ECRF Settings</a></li>
<li><a href="#update">14) Firmware Update</a></li>
<li><a href="#reboot">15) Reboot</a></li>
</ul>
<li><strong><a href="#installation">Installation</a></strong></li>
<ul>
<li><a href="#sdcard">1) MicroSD Card</a></li>
<li><a href="#source">2) From Source</a></li>
<li><a href="#bin">3) From .BIN</a></li>
</ul>
<li><strong><a href="#disclaimer">Disclaimer</a></strong></li>

# Introduction<a id="introduciton"></a>
This firmware is an alternative to the EvilCrowRF default firmware.

This firmware allows the following attacks:
<ul>
<li>Record Signal RAW Data</li>
<li>Record Signal Binary</li>
<li>Transmit .SUB File</li>
<li>Transmit RAW</li>
<li>Transmit Binary</li>
<li>Transmit Decimal**</li>
<li>Kaiju Analyze</li>
<li>Kaiju Rolling Codes</li>
<li>Signal Scanner</li>
<li>Bruteforce**</li>
<li>Rolljam</li>
<li>Rollback</li>
<li>Jammer</li>
<li>...</li>

</ul>

**Supported protocol: Princeton (24bits) , Holtek HT12X (12bits) , CAME (12bits) , CAME (18bits) , CAME (24bits) , CAME (25bits) , SMC5326 (25bits) , Nice FLO (12bits) , Nice FLO (24bits) , GateTX (24bits)

# Firmware<a id="firmware"></a>
## 1) Record<a id="record"></a>

<li><strong>You have the choice to use the existing presets:</strong></li>
<ul>
<li>Custom ( Custom CC1101 Settings )</li>
<li>AM270 ( Modulation: ASK/OOK | Bandwidth: 270.83 kHz )</li>
<li>AM650 ( Modulation: ASK/OOK | Bandwidth: 650.00 kHz )</li>
<li>FM238 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 2.38 kHz)</li>
<li>FM4768 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 47.61 kHz)</li>
</ul>
<img src="https://i.imgur.com/tvCItnk.png" alt="IMAGE ALT TEXT">

<li><strong>Received signal format:</strong></li>
<ul>
<li>RAW Data with sample count:</li>
<li>-1004 370 -424 404 -389 405 -389 403 -421 374 -420 373 -388 406 -421 408 -389 409 -386 409 | Sample: 20</li>
<img src="https://i.imgur.com/e6eiUOz.png" alt="IMAGE ALT TEXT">

<li>Binary with symbol count:</li>
<li>1001001001001001001101101101101101001101101001001001001001101101001101101101101101101001101101001 | Symbol: 398</li>
</ul>
<img src="https://i.imgur.com/Adus3qS.png" alt="IMAGE ALT TEXT">

<li><strong>Possibility to save the signal in flipper zero .sub file format.</strong></li>
<ul>
<li>Filetype: Flipper SubGhz RAW File</li>
<li>Version: 1</li>
<li>Frequency: 433920000</li>
<li>Preset: FuriHalSubGhzPresetOok650Async</li>
<li>Protocol: RAW</li>
<li>RAW_Data: -1004 370 -424 404 -389 405 -389 403 -421 374 -420 373 -388 406 -421 408 -389 409 -386 409</li>
</ul>
<img src="https://i.imgur.com/48GYkcU.png" alt="IMAGE ALT TEXT">

## 2) Transmit<a id="transmit"></a>
<li><strong>You can send a decimal signal with a known protocol:</strong></li>
<ul>
<li>Princeton</li>
<li>Holtek HT12X</li>
<li>CAME</li>
<li>SMC5326</li>
<li>Nice FLO</li>
<li>GateTX</li>
</ul>
<img src="https://i.imgur.com/7lG48vz.png" alt="IMAGE ALT TEXT">

<li><strong>You can send a RAW signal.</strong></li>
<img src="https://i.imgur.com/RLpYP6x.png" alt="IMAGE ALT TEXT">

<li><strong>You can send a binary signal with symbol count.</strong></li>
<img src="https://i.imgur.com/ysVkwiB.png" alt="IMAGE ALT TEXT">

## 3) Saved<a id="saved"></a>
<li><strong>You can upload a signal (.sub) to the MicroSD card from the webpanel.</strong></li>
<img src="https://i.imgur.com/qLmZ1gM.png" alt="IMAGE ALT TEXT">

<li><strong>You can send a signal (.sub) from the MicroSD card.</strong></li>
<ul>
<li>Max. Lenght: 4096</li>
</ul>
<li><strong>You can download a signal (.sub) from the MicroSD card.</strong></li>
<br>
<li><strong>You can delete a signal (.sub) from the MicroSD card.</strong></li>
<br>
<li><strong>You can apply a signal to a button to send it later.</strong></li>
<ul>
<li>Button 1</li>
<li>Button 2</li>
</ul>
<img src="https://i.imgur.com/Fqeqzk7.png" alt="IMAGE ALT TEXT">

## 4) Jammer<a id="jammer"></a>
<li><strong>You can select many jamming power:</strong></li>
<ul>
<li>12 (Max.)</li>
<li>11</li>
<li>10</li>
<li>7</li>
<li>5</li>
<li>0 (Min.)</li>
</ul>
<img src="https://i.imgur.com/AJOqqx3.png" alt="IMAGE ALT TEXT">

## 5) Scanner<a id="scanner"></a>
<li><strong>You can scan with min. RSSI many frequencies:</strong></li>
<ul>
<li>300.00 mHz</li>
<li>303.87 mHz</li>
<li>304.25 mHz</li>
<li>315.00 mHz</li>
<li>318.00 mHz</li>
<li>390.00 mHz</li>
<li>418.00 mHz</li>
<li>433.07 mHz</li>
<li>433.92 mHz</li>
<li>434.42 mHz</li>
<li>434.77 mHz</li>
<li>438.90 mHz</li>
<li>868.30 mHz</li>
<li>868.35 mHz</li>
<li>868.86 mHz</li>
<li>868.95 mHz</li>
<li>915.00 mHz</li>
<li>925.00 mHz</li>
</ul>
<br>
<li><strong>You can apply the frequency found.</strong></li>
<img src="https://i.imgur.com/WJRIoNc.png" alt="IMAGE ALT TEXT">

## 6) Bruteforcer<a id="bruteforcer"></a>
<li><strong>You can bruteforce a decimal signal with a known protocol:</strong></li>
<ul>
<li>Princeton (24bits)</li>
<li>Holtek HT12X (12bits)</li>
<li>CAME (12bits)</li>
<li>CAME (18bits)</li>
<li>CAME (24bits)</li>
<li>CAME (25bits)</li>
<li>SMC5326 (25bits)</li>
<li>Nice FLO (12bits)</li>
<li>Nice FLO (24bits)</li>
<li>GateTX(24bits)</li>
<br>
<li>Max. Decimal: 2147483647</li>
</ul>
<img src="https://i.imgur.com/a4l4hr7.png" alt="IMAGE ALT TEXT">

## 7) CC1101 Settings<a id="cc1101"></a>
<li><strong>You have the choice to use the existing presets:</strong></li>
<ul>
<li>Custom ( Custom CC1101 Settings )</li>
<li>AM270 ( Modulation: ASK/OOK | Bandwidth: 270.83 kHz )</li>
<li>AM650 ( Modulation: ASK/OOK | Bandwidth: 650.00 kHz )</li>
<li>FM238 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 2.38 kHz)</li>
<li>FM4768 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 47.61 kHz)</li>
</ul>
<img src="https://i.imgur.com/tvCItnk.png" alt="IMAGE ALT TEXT">

<li><strong>You can assign a module for RX:</strong></li>
<ul>
<li>Module 1</li>
<li>Module 2</li>
</ul>
<br>
<li><strong>You can assign a module for TX:</strong></li>
<ul>
<li>Module 1</li>
<li>Module 2</li>
</ul>
<img src="https://i.imgur.com/OFI0YGl.png" alt="IMAGE ALT TEXT">

<li><strong>You can assign a frequency:</strong></li>
<ul>
<li>Range: 300.00 mHz to 348.00 mHz</li>
<li>Range: 387.00 mHz to 464.00 mHz</li>
<li>Range: 779.00 mHz to 928.00 mHz</li>
</ul>

<li><strong>You can assign a modulation:</strong></li>
<ul>
<li>ASK/OOK</li>
<li>2FSK</li>
</ul>

<li><strong>You can assign a bandwidth:</strong></li>
<ul>
<li>Range: 58.03 mHz to 812.50 kHz</li>
</ul>

<li><strong>You can assign a deviation:</strong></li>
<ul>
<li>Range: 1.58 mHz to 385.85.00 kHz</li>
</ul>

<li><strong>You can assign a datarate:</strong></li>
<ul>
<li>Range: 0.02 mHz to 1621.83 kBaud</li>
</ul>

<li><strong>You can assign a packet format:</strong></li>
<ul>
<li>Synchronous</li>
<li>Radnom</li>
<li>Asynchronous</li>  
</ul>
<img src="https://i.imgur.com/egWK8tW.png" alt="IMAGE ALT TEXT">

## 8) Kaiju Analyze<a id="kaiju"></a>

## 9) Kaiju Rolling Codes<a id="rolling"></a>

## 10) Rolljam Attack<a id="rolljam"></a>

## 11) Rollback Attack<a id="rollback"></a>

## 12) ECRF Logs<a id="logs"></a>

## 13) ECRF Settings<a id="ecrf"></a>

## 14) Firmware Update<a id="update"></a>

## 15) Reboot<a id="reboot"></a>

# Installation<a id="installation"></a>

## 1) MicroSD Card<a id="sdcard"></a>
- Download and place the 'CONFIG' folder on a MicroSD card.
- Download and place the 'HTML' folder on a MicroSD card.
- Download and pPlace the 'SUBGHZ' folder on a MicroSD card.
 
## .SUB File

- Place your file** (.sub) in the 'SUBGHZ' folder.
 
 **Supported protocol: RAW, Princeton , Holtek HT12X , CAME , SMC5326 , Nice FLO , GateTX
 
## 2) From Source<a id="source"></a>

## Download<a id="download"></a>

 - Download and install ESPAsyncWebServer library: https://github.com/me-no-dev/ESPAsyncWebServer
 - Download and install AsyncElegantOTA library: https://github.com/ayushsharma82/AsyncElegantOTA
 - Download and install AsyncTCP library: https://github.com/me-no-dev/AsyncTCP
 - Download and install ArduinoJson library: https://github.com/bblanchon/ArduinoJson
 
<a href="https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries">How to install a library ?</a>
 
 - Download and upload EvilCrowRF firmware.

<a href="https://lastminuteengineers.com/esp32-arduino-ide-tutorial/">How to upload a firmware ?</a>
 
 ## 3) From .BIN<a id="bin"></a>
 
 - <a href="https://randomnerdtutorials.com/flashing-micropython-firmware-esptool-py-esp32-esp8266/">How to upload .bin file from esptool ?</a>
 - <a href="https://esp.huhn.me/">How to upload .bin file from the web ?</a>
 - ...

# Disclaimer<a id="disclaimer"></a>

Evil Crow RF is a basic device for professionals and cybersecurity enthusiasts.

We are not responsible for the incorrect use of Evil Crow RF.

Be careful with this device and the transmission of signals. Make sure to follow the laws that apply to your country.

Official firmware: https://github.com/joelsernamoreno/EvilCrowRF-V2
