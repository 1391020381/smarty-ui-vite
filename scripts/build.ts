// 分包导出的时候需要每个组件都分别配置自己的配置文件
// 而且需要由程序自动读取组件文件夹 根据文件夹的名字遍历打包
// 还需要为每个子组件包配上一个 package.json文件

// 读取 vite 配置
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

// 全量打包
build(defineConfig(config as UserConfig) as InlineConfig);
