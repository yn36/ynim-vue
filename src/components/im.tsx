import { defineComponent } from 'vue'
import '/@/style/index.less'

export default defineComponent({
  name: 'im',
  render() {
    return (
      <div class="ynui_ynim_box">
        {/* ynui_ynim_main.为主模版 */}
        <div class="ynui_ynim_main">
          <div class="ynui_ynim_info">
            <div class="ynui_ynim_user">用户名</div>
            <div class="ynui_ynim_remark">备注</div>
          </div>
        </div>
        {/* ynui_ynim_close.为最小化主模版 */}
        <div class="ynui_ynim_close"></div>
      </div>
    )
  }
})