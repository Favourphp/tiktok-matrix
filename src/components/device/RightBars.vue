<template>
  <div
    class="flex flex-col justify-start z-10 bg-base-100 shadow-2xl rounded-2xl absolute right-[-55px] top-[-55px] ring-1 ring-base-300">
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('send_keycode', 'task')">
      <font-awesome-icon icon="fa fa-window-restore" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('task') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('send_keycode', 'home')">
      <font-awesome-icon icon="fa-solid fa-home" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('home') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('send_keycode', 'back')">
      <font-awesome-icon icon="fa fa-reply" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('back') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'input', 'keyevent', 'KEYCODE_POWER'] })">
      <font-awesome-icon icon="fa fa-lightbulb" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('power') }}</span>
    </button>
    <!-- <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'reboot'] })">
      <font-awesome-icon icon="fa fa fa-refresh" class="h-6 w-6 text-error" />
      <span class="text-md block font-bold">{{ $t('reboot') }}</span>
    </button> -->
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'input', 'swipe', '500', '1000', '500', '500', '300'] })">
      <font-awesome-icon icon="fa-arrow-up" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('up') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'input', 'swipe', '500', '500', '500', '1000', '300'] })">
      <font-awesome-icon icon="fa-arrow-down" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('down') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'input', 'swipe', '1000', '500', '500', '500', '300'] })">
      <font-awesome-icon icon="fa-arrow-left" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('left') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="$emiter('adbEventData', { args: ['shell', 'input', 'swipe', '500', '500', '1000', '500', '300'] })">
      <font-awesome-icon icon="fa-arrow-right" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('right') }}</span>
    </button>
    <!-- <button
      class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block tooltip"
      :data-tip="$t('showTimeSetting')"
      @click="$emiter('adbEventData', { args: ['shell', 'am', 'start', '-a', 'android.settings.DATE_SETTINGS'] })">
      <font-awesome-icon icon="fa fa-clock" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('time') }}</span>
    </button>
    <button
      class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block tooltip"
      :data-tip="$t('showLanguageSetting')"
      @click="$emiter('adbEventData', { args: ['shell', 'am', 'start', '-n', 'com.android.settings/.LanguageSettings'] })">
      <font-awesome-icon icon="fa fa-language" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('language') }}</span>
    </button>
    <button
      class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block tooltip"
      :data-tip="$t('showSimInfo')"
      @click="$emiter('adbEventData', { args: ['shell', 'am', 'start', '-a', 'android.settings.DEVICE_INFO_SETTINGS'] })">
      <font-awesome-icon icon="fa fa-mobile" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('sim') }}</span>
    </button> -->
    <!-- <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="uploadVideo">
        <font-awesome-icon icon="fa fa-upload" class="h-6 w-6 text-primary" />
        <span class="text-md block font-bold">{{ $t('upload') }}</span>
        <input id="upload_video_input" type="file" v-on:change="on_upload_video" multiple hidden />
      </button> -->
    <!-- <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block tooltip" :data-tip="$t('installAPK')"
        @click="app_install">
        <font-awesome-icon icon="fa-brands fa-android" class="h-6 w-6 text-primary" />
        <span class="text-md block font-bold">{{ $t('apk') }}</span>
        <input id="app_install_input" type="file" v-on:change="on_app_install" multiple hidden />
      </button> -->
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="show_text_input_dialog">
      <font-awesome-icon icon="fa fa-keyboard" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('input') }}</span>
    </button>
    <!-- <button
      class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block tooltip"
      :data-tip="$t('enableTCP')" @click="$emiter('adbEventData', { args: ['tcpip', '5555'] })">
      <font-awesome-icon icon="fa-solid fa-network-wired" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('tcp') }}</span>
    </button> -->

    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="openDebugWindow">
      <font-awesome-icon icon="fa-solid fa-bug" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('debug') }}</span>
    </button>
    <button class="btn bg-transparent hover:bg-transparent border-0 text-black-500 hover:text-blue-700 p-0 block"
      @click="showLogs">
      <font-awesome-icon icon="fa-solid fa-bug" class="h-6 w-6 text-primary" />
      <span class="text-md block font-bold">{{ $t('logs') }}</span>
    </button>
  </div>
  <dialog ref="input_dialog" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">{{ input_dialog_title }}</h3>
      <label class="input input-bordered flex items-center gap-2 my-4">
        <input id="input_dialog_text" type="text" class="grow" placeholder="" v-model="input_dialog_text"
          v-on:keyup.enter="input_callback" />
      </label>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-success" @click="input_callback">{{ $t('enter') }}</button>
        </form>
      </div>
    </div>
  </dialog>
  <dialog ref="log_dialog" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">logs/{{ real_serial }}.log</h3>
      <pre ref="log_dialog_body" class="text-md h-96 overflow-y-scroll">{{ logs }}</pre>
      <MyButton icon="fa fa-refresh" @click="loadLogs" label="refresh" />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script>
import { WebviewWindow } from '@tauri-apps/api/window'
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs'
import MyButton from '../Button.vue'
export default {
  name: 'RightBars',
  components: {
    MyButton
  },
  props: {
    serial: {
      type: String,
      default: () => {
        return ''
      }
    },
    real_serial: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      input_dialog_text: '',
      input_dialog_title: '',
      input_callback: () => { },
      logs: ''
    }
  },
  methods: {
    async loadLogs() {
      const logs = await readTextFile(`logs/${this.real_serial}.log`, { dir: BaseDirectory.AppData });
      //show tail 100 lines
      this.logs = logs.split('\n').slice(-200).join('\n')
      this.$nextTick(() => {
        this.$refs.log_dialog_body.scrollTop = this.$refs.log_dialog_body.scrollHeight
      })
    },
    async showLogs() {
      this.$refs.log_dialog.showModal()
      this.loadLogs()

    },
    async openDebugWindow() {
      localStorage.setItem('serial', this.serial);
      const port = await readTextFile('port.txt', { dir: BaseDirectory.AppData });
      localStorage.setItem('port', port);
      const webview = new WebviewWindow('Debug', {
        title: 'Debug Tools',
        url: 'debug.html',
        maximized: true
      })

      webview.once('tauri://created', function () {
        // webview window successfully created
      })
      webview.once('tauri://error', function (e) {
        // an error happened creating the webview window
      })
    },
    async show_text_input_dialog() {
      this.$refs.input_dialog.showModal()
      this.input_dialog_title = 'Input Text'
      this.input_callback = this.post_input_dialog
    },
    async show_adb_input_dialog() {
      this.$refs.input_dialog.showModal()
      this.input_dialog_title = 'ADB Input'
      this.input_callback = this.post_adb_input_dialog
    },
    async post_input_dialog() {
      await this.$emiter('setText', this.input_dialog_text)
      this.input_dialog_text = ''
      this.$refs.input_dialog.close()
    },
    async post_adb_input_dialog() {
      let args = this.input_dialog_text.split(' ')
      await this.$emiter('adbEventData', { args: args })
      this.input_dialog_text = ''
      this.$refs.input_dialog.close()
    },
    async uploadVideo() {
      document.getElementById('upload_video_input').click()
    },
    async on_upload_video(e) {
      console.log(e.target.files)
      await this.$emiter('uploadFiles', e.target.files)
    },
    async app_install() {
      document.getElementById('app_install_input').click()
    },
    async on_app_install(e) {
      await this.$emiter('installApks', e.target.files)
    },
  }
}
</script>
