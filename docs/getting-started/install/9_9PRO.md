---
sidebar_position: 1
id: for_9_9PRO
title: For OnePlus 9/9 Pro
---

## Prerequisites

:::note
Dirty flashing from OOS12 based version is fine. The required firmware is included in the ROM.
:::

:::danger
When coming from OOS to Nameless-AOSP OOS13 based ROM you need to have OOS13 installed.
:::

:::danger
  For OOS12 based build the required firmware is C.62-C.65 **IN BOTH SLOTS!** DO NOT SKIP THIS!
:::

- Working brains, common sense, lots of coffee
  
- Latest [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Google USB driver](https://dl.google.com/android/repository/latest_usb_driver_windows.zip)
- Developer options enabled: Settings -> About phone -> Tap Build number at the bottom seven (7) times
- ADB enabled: Settings -> System -> Developer options -> USB debugging
- Required images: dtbo.img, vendor_boot.img, boot.img (put these in the same folder with platform-tools)
- Get images from downloads page
- ROM zip (put it in the same folder with platform-tools)
- Unlocked bootloader
  
  :::note
  If you are currently on OOS11 it's better to unlock bootloader before updating to OOS12. For unknown reason some devices cannot be unlocked in OOS12.
  ::: 
1. Reboot your phone to fastboot mode
2. Open cmd and go to the folder where platform tools are **(DO NOT USE POWERSHELL!)**
3. Enter following commands by copypasting one by one:
  ```js
    fastboot flash dtbo dtbo.img
  ```
  ```js
    fastboot flash vendor_boot vendor_boot.img
  ```

4. Temporarily flash recovery:
  ```js
  fastboot flash boot boot.img
  ```
5. Reboot your phone to recovery mode, click "Install update" -> "ADB Sideload"
6. In cmd enter command: 
   ```js
   adb sideload Nameless-AOSP_xxx.zip
   ```
7. Wait until your device shows Step 2/2 and back arrow appears. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"

  :::info
  Progress on your pc will stop at around 47%. It is normal behaviour.
  :::

8. Click back arrow in recovery, then click "Reboot to system"
