module.exports = {
    pluginOptions: {
      electronBuilder: {
        mainProcessFile: 'electron/main.ts',
        outputDir: 'dist_electron',
        nodeIntegration: true,
        builderOptions: {
          appId: 'cn.siBai.veet',
          productName: 'veet',
          copyright: 'Copyright © 2021 StephenShen',
          directories: {
            output: './out_dist',
          },
          win: {
            icon: './electron/ico/install 256x256.ico',
            target: [
              {
                target: 'nsis',
                arch: ['x64', 'ia32'],
              },
            ],
          },
          nsis: {
            // https://www.jianshu.com/p/1701baa240fd
            oneClick: false,
            perMachine: true,
            allowElevation: true,
            allowToChangeInstallationDirectory: true,
            installerIcon: './electron/ico/install 256x256.ico',
            uninstallerIcon: './electron/ico/uninstall 256x256.ico',
            installerHeaderIcon: './electron/ico/install 256x256.ico',
            createDesktopShortcut: true,
            createStartMenuShortcut: true,
            shortcutName: 'veet',
          },
        },
      },
    },
  }