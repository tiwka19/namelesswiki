---
sidebar_position: 3
id: FAQ
title: Frequently Asked Questions
---

If you have a question, please read or search this page before asking. It saves time for everyone — especially you.

**[You can also search for the answer to your question.](/search)**

## Links
<details><summary>Links</summary>

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Google USB drivers](https://dl.google.com/android/repository/latest_usb_driver_windows.zip)
- [Qualcomm drivers](https://drive.google.com/file/d/1zKPFtcc2X_Nf70mcvn9TBu60bHl6Q3cP)
- [APK to enable local update option in OOS12](https://oxygenos.oneplus.net/OPLocalUpdate_For_Android12.apk)
- [MSM tool](https://onepluscommunityserver.com/list/Unbrick_Tools/)

</details>

## How to use MSM tool
<details><summary>How to use MSM tool</summary>

**Prerequisites:**
- [Qualcomm drivers](https://drive.google.com/file/d/1zKPFtcc2X_Nf70mcvn9TBu60bHl6Q3cP)
- [MSM tool](https://onepluscommunityserver.com/list/Unbrick_Tools/) downloaded for your device model. Make sure to download for correct region.

1. Run MsmDownloadTool Vx.x.exe as administrator
2. On login window select Others in User type and click next
3. Do not change any of the default settings
4. Click Start button on top left
5. Put your phone to EDL mode
6. Process will start

If MSM does not connect to your phone then it's probably a driver issue.
</details>

## How to enter edl mode
<details><summary>How to enter edl mode</summary>

#### Method 1: Physical buttons
1. Turn off your phone
2. Push volume up and volume down together
3. Connect the USB cable to your phone
4. Phone should boot to edl mode and screen stays black.

#### Method 2: using adb
1. Phone needs to be in recovery or in OS
2. From cmd issue command:

    ```js
    adb reboot edl 
    ```
  
</details>

## Unlocking bootloader
<details><summary>Unlocking bootloader</summary>


**Prerequisites:**

- [Google USB drivers](https://dl.google.com/android/repository/latest_usb_driver_windows.zip) installed 
- Latest [platform-tools](https://developer.android.com/studio/releases/platform-tools) on your PC

:::danger NOTE
**ALL DATA WILL BE WIPED!**
:::

1. Go to settings -> About phone -> Tap Build number 7 times to activate developer options
2. Insert your screen lock pin / pattern if necessary
3. Go to Settings -> System -> Developer options
4. Enable USB Debugging and OEM Unlocking
5. Connect your phone to PC with USB cable.
6. Check 'Always allow from this computer' and tap Allow
7. Open cmd in the folder where platform-tools are located.
8. Check that your PC finds your phone by typing adb devices. It should say:
 <pre>
  <b>List of devices attached</b>{'\n'}
  1b234567   device{'\n'}
</pre>
9. Reboot your phone to bootloader
  ```js
  adb reboot bootloader
  ```
10. Check that your PC finds your phone by typing fastboot devices. It should say:
<pre>
  <b>List of devices attached</b>{'\n'}
  1b234567   fastboot{'\n'}
</pre>

11.  Use command
  ```js
  fastboot oem unlock
  ```
12. Use volume keys to select 'unlock the bootloader' and confirm with power button

</details>

## A13 flashing instructions when coming from OOS12 based custom ROM
<details><summary>A13 flashing instructions when coming from OOS12 based custom ROM</summary>

1. Reboot to fastboot
2. Flash recovery
3. Reboot to recovery
4. Sideload ROM
5. Format data

</details>

## Both slots? what? how?
<details><summary>Both slots? what? how?</summary>

#### About slots
Your phone has two slots. Both of them has full OS and firmware. Custom ROMs are based on certain version of official OnePlus firmware so both slots needs to have the same firmware. If they differ, then you are most likely to have problems after updating your custom ROM through OTA.

#### Flashing both slots
You do this by downloading the correct OOS full zip from the "#oos-repo" note in telegram group. Then use the local update feature in system update to flash the zip. After you reboot, use the local update feature to flash the same full zip again. By flashing it twice, you will guarantee that you have the latest firmware on both slots. It is very important that you DO NOT skip this step in the flashing instructions.

:::note 
In OOS12 the local update options is disabled by default. You can enable it from developer settings or by using local update apk found in links section
:::

</details>

## fastboot: unknown option -- disable-verity
<details><summary>fastboot: unknown option -- disable-verity</summary>

- Use cmd, NOT powershell
- Make sure platform-tools is the latest version
- Make sure that the files you are going to flash are in the same folder with platform-tools
- Make sure you opened cmd in the folder where platform-tools are

</details>

## adb error cannot read 'filename.zip'
<details><summary>adb error cannot read 'filename.zip'</summary>

- Make sure platform-tools is the latest version. If not, download from links. (Do not use Minimal ADB and Fastboot.)
- Make sure the files you are sideloading are in the same folder where platform-tools are
- Use cmd instead of powershell

</details>

## How to root?
<details><summary>How to root?</summary>

:::note
- Make sure the magisk file is in the same folder with platform-tools<br />
- You don't need to change the file extension from apk to zip
:::

- Download [Magisk 25.2](https://github.com/topjohnwu/Magisk/releases/download/v25.2/Magisk-v25.2.apk)
- Reboot to recovery
- Select Install update -> ADB Sideload
- Use command:
  ```
  adb sideload Magisk-v25.2.apk
  ```
- Reboot

</details>

## I did not read instructions and updated from ota, what now?
<details><summary>I did not read instructions and updated from ota, what now?</summary>

The latest update for all currently supported devices is based on OOS12 firmware whereas previous builds were based on OOS11 firmware so updating through OTA will cause bootloop. The broken slot is beyond saving. If there is important data you need to save, follow these instructions.

1. Boot to fastboot mode (also known as bootloader)
2. From PC, check current active slot with command

    ```js
    fastboot getvar all
    ```

3. Look for (bootloader) current-slot If it says current-slot:a then use command
   
   ```js
    fastboot --set-active=b
   ```

4. and vice versa

5. Reboot
6. Save your precious data
7. Clean flash using correct procedure

</details>
