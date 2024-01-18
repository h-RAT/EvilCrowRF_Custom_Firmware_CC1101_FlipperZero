# EvilCrowRF_Custom_Firmware_CC1101_FlipperZero

<strong>Idea, development and implementation of this firmware:</strong> h-RAT (https://github.com/h-RAT/).
<br><br>
<strong>Discord: h_rat</strong>
<br><br>
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y1L3OUQ)

<br>

<strong>Idea, development and implementation of the original firmware:</strong> Joel Serna (@JoelSernaMoreno - https://github.com/joelsernamoreno/).

<strong>Main collaborator:</strong> Little Satan (https://github.com/LSatan/)

<strong>PCB design:</strong> Ignacio Díaz Álvarez (@Nacon_96), Forensic Security (@ForensicSec) and April Brother (@aprbrother).

<strong>Manufacturer and distributor:</strong> April Brother (@aprbrother).

<strong>Distributor from United Kingdom:</strong> KSEC Worldwide (@KSEC_KC).

<strong>For sale with April Brother (shipping from China):</strong>
<ul>
<li>Evil Crow RF V2 Aliexpress: https://www.aliexpress.com/item/1005004032930927.html</li>
<li>Evil Crow RF V2 Alibaba: https://www.alibaba.com/product-detail/Evil-Crow-RF2-signal-receiver-with_1600467911757.html</li>
</ul>


<strong>For sale with KSEC Worldwide (shipping from United Kingdom):</strong>
<ul>
<li>Evil Crow RF V2: https://labs.ksec.co.uk/product/evil-crow-rf-v2/</li>
<li>Evil Crow RF V2 Lite: https://labs.ksec.co.uk/product/evil-crow-rf2-lite/</li>
</ul>

<br>

<strong>Discord Group:</strong> https://discord.gg/Rb2j3jA5Ym

# Preview

<div align="center">
  <a href="https://www.youtube.com/watch?v=Pc-R-e6jsEY"><img src="https://i.imgur.com/ypR4gJR.png" alt="IMAGE ALT TEXT"></a>
</div>

<br>

- Kaiju analyze example: <a href="https://www.youtube.com/watch?v=-UQZsz2dbqI">https://www.youtube.com/watch?v=-UQZsz2dbqI</a>
- Kaiju rolling code example: <a href="https://www.youtube.com/watch?v=AoA9FV-VG6w">https://www.youtube.com/watch?v=AoA9FV-VG6w</a>
- Rollback example: <a href="https://www.youtube.com/watch?v=LSzn4hr09bA">https://www.youtube.com/watch?v=LSzn4hr09bA</a>

<br>

# Summary

<li><strong><a href="#introduciton">Introduction</a></strong></li>
<li><strong><a href="#installation">Installation</a></strong></li>
<ul>
<li><a href="#sdfiles">1) SD Files</a></li>
<li><a href="#firmware">2) Firmware</a></li>
<li><a href="#webpanel">3) Webpanel</a></li>
<li><a href="#rollfirm">4) Rolljam Firmware</a></li>
</ul>
<li><strong><a href="#features">Features</a></strong></li>
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

# Installation<a id="installation"></a>

## 1) SD Files<a id="sdfiles"></a>
- Download and place the 'CONFIG' folder on a MicroSD card.
- Download and place the 'HTML' folder on a MicroSD card.
- Download and pPlace the 'SUBGHZ' folder on a MicroSD card.
 
## .SUB File

- Place your file** (.sub) in the 'SUBGHZ' folder.
 
 **Supported protocol: AlutechAT, Ansonic, BETT, CAME, Clemsa, Doitrand, Dooya, FAAC, GateTX, Holtek, Holtek HT12X, Hormann, IntertechnoV3, KeeLoq, Linear, LinearDelta3, Magellan, Marantec, Nero Radio, Nero Sketch, Nice FLO, PhoenixV2, PowerSmart, Princeton, RAW, SMC5326, Security+ 1.0, Security+ 2.0, Starline, UNILARM
 
## 2) Firmware<a id="firmware"></a>

- Install the .bin from OTA
- or -->
- Download & execute ESPHome-Flasher
- Select COM port
- Select .bin file
- Press Flash ESP (You may need to put your device in download mode)

<a href="https://github.com/esphome/esphome-flasher/releases">ESPHome-Flasher</a>

 ## 3) Webpanel<a id="webpanel"></a>
 
 - Connect your mobile/laptop/computer to this Wi-Fi:

SSID: ECRF<br>
Password: 123456789

 - Open a browser and navigate to the web panel. (Default IP: 192.168.4.1)
 
 - Enjoy

 ## 4) Rolljam Firmware<a id="rollfirm"></a>
 
<div align="center">
  <img src="https://i.imgur.com/IY5tRbk.png" alt="IMAGE ALT TEXT">
</div>
 
 Download and upload Rolljam firmware on your second device.
 
- Install the .bin from OTA
- or -->
- Download & execute ESPHome-Flasher
- Select COM port
- Select .bin file
- Press Flash ESP (You may need to put your device in download mode)

<a href="https://github.com/esphome/esphome-flasher/releases">ESPHome-Flasher</a>

<br>

The first device must be powered ON and connected to the default ECRF network. (SSID: ECRF | Password: 123456789)

 - Plug your second device into your computer and get the IP address from the serial monitor. (Baudrate: 38400)

 - Go to the EvilCrowRF web panel and set the IP address of the second device. (ECRF Settings -> Jammer Device -> Local IP Address)

 - Now you can start a rolljam attack.
 
# Features<a id="features"></a>

## 1) Record<a id="record"></a>

<li><strong>You have the choice to use the existing presets:</strong></li>
<ul>
<li>Custom ( Custom CC1101 Settings )</li>
<li>AM270 ( Modulation: ASK/OOK | Bandwidth: 270.83 kHz )</li>
<li>AM650 ( Modulation: ASK/OOK | Bandwidth: 650.00 kHz )</li>
<li>FM238 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 2.38 kHz)</li>
<li>FM4768 ( Modulation: 2FSK | Bandwidth: 270.83 kHz | Deviation: 47.61 kHz)</li>
</ul>

<li><strong>You can adjust the minimum RSSI.</strong></li>

<img src="https://i.imgur.com/lkwCiWu.png" alt="IMAGE ALT TEXT">

<li><strong>Received signal format:</strong></li>
<ul>
<li>RAW Data with sample count:</li>
<li>-1004 370 -424 404 -389 405 -389 403 -421 374 -420 373 -388 406 -421 408 -389 409 -386 409 | Sample: 20</li>
<li>Binary with symbol count:</li>
<li>1001001001001001001101101101101101001101101001001001001001101101001101101101101101101001101101001 | Symbol: 398</li>
</ul>

<img src="https://i.imgur.com/rQjLC99.png" alt="IMAGE ALT TEXT">

<li><strong>Possibility to send the signal in flipper zero .sub file format.</strong></li>
<li><strong>Possibility to analyze the signal with Kaiju.</strong></li>
<li><strong>Possibility to save the signal in flipper zero .sub file format.</strong></li>

<br>

<img src="https://i.imgur.com/7NE5ZQH.png" alt="IMAGE ALT TEXT">

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
<li><strong>You can jam both frequency at the same time.</strong></li>

<li><strong>You can select many jamming power:</strong></li>
<ul>
<li>12 (Max.)</li>
<li>11</li>
<li>10</li>
<li>7</li>
<li>5</li>
<li>0 (Min.)</li>
</ul>
<img src="https://i.imgur.com/dMQA0h7.png" alt="IMAGE ALT TEXT">

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

<li><strong>You can bruteforce the jukebox:</strong></li>
<ul>
<li>Free Credit</li>
<li>Pause Song</li>
<li>Skip Song</li>
<li>Volume UP</li>
<li>Volume DOWN</li>
<li>Power OFF</li>
<li>Lock Queue</li>
<br>
<li>Default ID (0x00) used. Most jukeboxes use the default ID.</li>
</ul>
<img src="https://i.imgur.com/vcaWlY6.png" alt="IMAGE ALT TEXT">

<li><strong>You can bruteforce DIP Switch remote controls:</strong></li>
<ul>
<li>Linear Multicode (10DIP)</li>
<li>Stanley Multicode (10DIP)</li>
<li>Chamberlain (9DIP)</li>
<li>Chamberlain (8DIP)</li>
<li>Chamberlain (7DIP)</li>
<li>Linear MooreMatic (8DIP)</li>
</ul>
<img src="https://i.imgur.com/SM6jdyh.png" alt="IMAGE ALT TEXT">

<li><strong>You can send De Bruijn sequences (Open Sesame):</strong></li>
<ul>
<li>Linear Multicode (10bits)</li>
<li>Stanley Multicode (10bits)</li>
<li>Chamberlain (9bits)</li>
<li>Linear MooreMatic (8bits)</li>
</ul>
<img src="https://i.imgur.com/CT5cG6s.png" alt="IMAGE ALT TEXT">


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

<li><strong>You can analyze the signals received with Kaiju.</strong></li>
<img src="https://i.imgur.com/p0nV8PU.png" alt="IMAGE ALT TEXT">

## 9) Kaiju Rolling Codes<a id="rolling"></a>

<li><strong>You can generate rolling codes with Kaiju.</strong></li>
<li><strong>You can send the rolling codes generated.</strong></li>
<li><strong>You can save the rolling codes generated.</strong></li>

<img src="https://i.imgur.com/dwfO4Gn.png" alt="IMAGE ALT TEXT">

## 10) Rolljam Attack<a id="rolljam"></a>

<div align="center">
  <img src="https://i.imgur.com/IY5tRbk.png" alt="IMAGE ALT TEXT">
</div>

<li><strong>You can perform a rolljam attack with different parameters:</strong></li>
<ul>
<li>Record Frequency</li>
<li>Record Modulation</li>
<li>Jammer Frequency (Usually: Record Frequency - 0.10 mHz)</li>  
<li>Jammer Power</li>
</ul>

<li><strong>You can send the second signal.</strong></li>
<li><strong>You can save the second signal to send it later.</strong></li>
<img src="https://i.imgur.com/zMDSQHh.png" alt="IMAGE ALT TEXT">

## 11) Rollback Attack<a id="rollback"></a>

<li><strong>You can perform a rollback attack with different parameters:</strong></li>
<ul>
<li>Record Frquency</li>
<li>Record Modulation</li>
<li>Time Frame</li>  
<li>Signal Required</li>
</ul>

<li><strong>You can send the rollback sequence.</strong></li>
<li><strong>You can save the rollback sequence to send it later.</strong></li>
<img src="https://i.imgur.com/IW1Rm22.png" alt="IMAGE ALT TEXT">

## 12) ECRF Logs<a id="logs"></a>

<li><strong>You can view the device logs.</strong></li>
<li><strong>You can download the device logs.</strong></li>
<li><strong>You can delete the device logs.</strong></li>
<img src="https://i.imgur.com/wYtJ5eQ.png" alt="IMAGE ALT TEXT">

## 13) ECRF Settings<a id="ecrf"></a>

<li><strong>You can view the device uptime.</strong></li>
<li><strong>You can view the device free ram.</strong></li>
<img src="https://i.imgur.com/bRD5ARU.png" alt="IMAGE ALT TEXT">

<li><strong>You can assign your kaiju token.</strong></li>
<img src="https://i.imgur.com/wuuvEy0.png" alt="IMAGE ALT TEXT">

<li><strong>You can assign an action to the button:</strong></li>
<ul>
<li>Send Tesla (US) Signal</li>
<li>Send Tesla (EU) Signal</li>
<li>Start Record Signal</li>  
<li>Send Last Recorded Signal</li>
<li>Send SD Selected Signal</li>  
<li>Start Jammer (315.00 mHz)</li>  
<li>Start Jammer (433.92 mHz)</li>  
<li>Start Jammer (868.35 mHz)</li>  
<li>Stop Jammer</li>  
</ul>
<img src="https://i.imgur.com/fGX4wKS.png" alt="IMAGE ALT TEXT">

<li><strong>You can adjust wifi settings.</strong></li>
<img src="https://i.imgur.com/SGmQQ6T.png" alt="IMAGE ALT TEXT">

## 14) Firmware Update<a id="update"></a>

<li><strong>You can update the firmware from the web panel.</strong></li>

# Disclaimer<a id="disclaimer"></a>

Evil Crow RF is a basic device for professionals and cybersecurity enthusiasts.

We are not responsible for the incorrect use of Evil Crow RF.

Be careful with this device and the transmission of signals. Make sure to follow the laws that apply to your country.
