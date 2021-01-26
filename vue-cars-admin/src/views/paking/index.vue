<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :model="pakingSearch" class="demo-form-inline">
          <el-form-item label="停车场名称">
            <el-input
              v-model="pakingSearch.paking_name"
              placeholder="审批人"
            ></el-input>
          </el-form-item>
          <el-form-item label="区域">
            <el-cascader
              v-model="pakingSearch.paking_area"
              :options="paking_area_options"
              :props="{ expandTrigger: 'hover' }"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="类型">
            <el-select
              v-model="pakingSearch.paking_type"
              placeholder="活动区域"
            >
              <el-option label="室内" value="shanghai"></el-option>
              <el-option label="室外" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" class="align-right">
        <router-link to="/addpaking">
          <el-button type="primary">新增停车场</el-button>
        </router-link>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="pakingTable"
      border
      stripe
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        align="center"
        type="selection"
        width="40"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="停车场名称"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="类型"
      ></el-table-column>
      <el-table-column align="center" prop="area" label="区域">
      </el-table-column>
      <el-table-column
        align="center"
        prop="number"
        label="可停放车辆"
      ></el-table-column>
      <el-table-column align="center" prop="isok" label="是否禁用">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isok"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="isOkChange(scope.row.isok)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="查看位置"
      ></el-table-column>
      <el-table-column align="center" prop="options" label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "PakingList",
  data() {
    return {
      pakingSearch: {
        paking_name: "",
        paking_area: "",
        paking_type: ""
      },
      paking_area_options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      pakingTable: [
        {
          name: "停车场名称",
          type: "类型",
          area: "区域",
          number: "可停放车辆",
          isok: true,
          address: "查看位置",
          options: "操作"
        }
      ]
    };
  },
  methods: {
    // 查询
    onSearch() {
      console.log("search!");
    },
    // 禁用状态改变
    isOkChange(value) {
      console.log(value);
    },
    // 停车场编辑
    handleEdit(index, value) {
      console.log(index, value);
    },
    // 停车场删除
    handleDelete(index, value) {
      console.log(index, value);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-table-column--selection .cell {
  padding-left: 10px !important;
}
</style>