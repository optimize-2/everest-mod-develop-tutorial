# 开始

## 准备

 - 基础 C# 语法
 - 基础 .NET 开发

## 配置开发环境

1. 下载一个代码编辑器。（我使用的是装了 C# 插件的 Visual Studio Code，但是推荐使用 Visual Studio）

 - [Visual Studio Code 下载地址](https://code.visualstudio.com/)
 - [Visual Studio 下载地址](https://visualstudio.microsoft.com/downloads/)

2. 下载 .NET 支持库。
  
    没有这个你是怎么玩的蔚蓝？？

3. 配置蔚蓝路径环境变量 `CelestePrefix`。

    以 Windows 系统为例，你的蔚蓝应该位于 `${CelestePrefix}/Celeste.exe`。

4. 下载蔚蓝模组模板。

    终端运行 `dotnet new --install CelesteMod.Templates`。

5. 新建你的项目。

    ```
    mkdir MyCoolMod # 新建文件夹，其中 MyCoolMod 为你的 Mod 名。
    cd MyCoolMod # 进入这个文件夹
    dotnet new celestemod # 创建蔚蓝模组项目
    ```

6. 在项目根目录创建构建脚本。

    `build.bat` (Windows)
    ```
    del MyCoolMod.zip MyCoolMod.dll
    dotnet build MyCoolMod.csproj
    zip MyCoolMod.zip -r LICENSE.txt everest.yaml Ahorn Dialog Graphics Maps MyCoolMod.dll debug.bin
    ```

    `build.sh` (Linux / Mac)
    ```
    rm MyCoolMod.zip MyCoolMod.dll
    dotnet build MyCoolMod.csproj
    zip MyCoolMod.zip -r LICENSE.txt everest.yaml Ahorn Dialog Graphics Maps MyCoolMod.dll debug.bin
    ```

7. 使用你的代码编辑器打开项目。

## WIP