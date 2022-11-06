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

### 蔚蓝热重载

在 `${CelestePrefix}/Saves/modsettings-Everest.celeste` 中，你可以把 `CodeReload_WIP` 改为 true，使得可以在不重启蔚蓝的情况下重新加载模组和地图（需写好 `Unload` 方法，不然会出现各种错误）。

    `build.bat` (Windows)
    ```
    del MyCoolMod.zip MyCoolMod.dll
    dotnet build MyCoolMod.csproj
    copy bin\\HeartWars.dll %CelestePrefix%\\Mods\\HeartWars\\bin /Y
    ```

### 补全依赖

有的蔚蓝是 xna 的，有的蔚蓝是 fna 的，如果直接把你的蔚蓝添加到依赖中，有可能会缺失一部分。

可以下载 [stripped lib](https://github.com/EverestAPI/Everest/releases/download/stable-1.3650.0/lib-stripped.zip) 并添加到依赖。这里面只有定义没有实现，所以可以上传到网上。（不要把反编译后的蔚蓝源码上传到任何地方！！！）

我把他放在项目根目录的 `lib/stripped/` 目录里，并在 `MyCoolMod.csproj` 里添加依赖：

```xml
<ItemGroup>
    <Reference Include="lib\stripped\Celeste.exe">
        <Private>false</Private>
    </Reference>
    <Reference Include="lib\stripped\MMHOOK_Celeste.dll">
        <Private>false</Private>
    </Reference>
    <Reference Include="lib\stripped\FNA.dll">
        <Private>false</Private>
    </Reference>
</ItemGroup>
```

## 编写代码

### 介绍

`Code/MyCoolModModule.cs` 是你模组的主类，你需要在这里声明你要用的游戏组件。

在 `Code` 文件夹下创建一个类，可以命名为 `MyCoolModManager.cs`，写下如下代码：

```cs
// Using 自己补全

namespace MyCoolMod.Code {
    public class MyCoolModManager : GameComponent {
        private static Game game;

        public static Player player;
        public static Level level;

        public MyCoolModManager(Game game) : base(game) {
            MyCoolModManager.game = game;
            Everest.Events.Level.OnLoadLevel += onLoadLevel;
        }

        public void Unload() {
            Everest.Events.Level.OnLoadLevel -= onLoadLevel;
        }

        public override void Update(GameTime gameTime) {
        }
        
        public static void onLoadLevel(Level level, Player.IntroTypes intro, bool fromLoader) {
            MyCoolModManager.level = level;
            MyCoolModManager.player = level.Tracker.GetEntity<Player>();
        }
    }
}
```

然后在 `MyCoolModule` 里实例化 `MyCoolModManager`。

```cs
public static Controller controller;

public override void Load() {
    controller = new Controller(Celeste.Instance);
}
```

此时你应该能正确获取到玩家对象了。

### 查看游戏源代码

WIP