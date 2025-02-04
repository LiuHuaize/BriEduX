import { useResumeStore } from '@/lib/stores/resume';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export const BasicsEditor = () => {
  const { resume, setValue } = useResumeStore();

  if (!resume) return null;

  const { basics } = resume.data;

  const handleChange = (key: string, value: string | number | boolean) => {
    setValue(`basics.${key}`, value);
  };

  const handlePictureChange = (key: string, value: string | number | boolean) => {
    setValue(`basics.picture.${key}`, value);
  };

  const handlePictureEffectsChange = (key: string, value: boolean) => {
    setValue(`basics.picture.effects.${key}`, value);
  };

  return (
    <div className="space-y-6">
      {/* 基本信息 */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>姓名</Label>
          <Input
            value={basics.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="输入你的姓名"
          />
        </div>

        <div className="space-y-2">
          <Label>职位</Label>
          <Input
            value={basics.headline}
            onChange={(e) => handleChange('headline', e.target.value)}
            placeholder="输入你的职位"
          />
        </div>

        <div className="space-y-2">
          <Label>邮箱</Label>
          <Input
            type="email"
            value={basics.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="输入你的邮箱"
          />
        </div>

        <div className="space-y-2">
          <Label>电话</Label>
          <Input
            value={basics.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="输入你的电话"
          />
        </div>

        <div className="space-y-2">
          <Label>地址</Label>
          <Input
            value={basics.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="输入你的地址"
          />
        </div>

        <div className="space-y-2">
          <Label>网站</Label>
          <Input
            value={basics.url.href}
            onChange={(e) => setValue('basics.url.href', e.target.value)}
            placeholder="输入你的网站地址"
          />
        </div>
      </div>

      <Separator />

      {/* 头像设置 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">头像设置</h3>

        <div className="space-y-2">
          <Label>头像链接</Label>
          <Input
            value={basics.picture.url}
            onChange={(e) => handlePictureChange('url', e.target.value)}
            placeholder="输入头像链接"
          />
        </div>

        <div className="space-y-2">
          <Label>大小 ({basics.picture.size}px)</Label>
          <Slider
            value={[basics.picture.size]}
            onValueChange={([value]) => handlePictureChange('size', value)}
            min={32}
            max={256}
            step={8}
          />
        </div>

        <div className="space-y-2">
          <Label>宽高比 ({basics.picture.aspectRatio})</Label>
          <Slider
            value={[basics.picture.aspectRatio]}
            onValueChange={([value]) => handlePictureChange('aspectRatio', value)}
            min={1}
            max={3}
            step={0.1}
          />
        </div>

        <div className="space-y-2">
          <Label>圆角 ({basics.picture.borderRadius}px)</Label>
          <Slider
            value={[basics.picture.borderRadius]}
            onValueChange={([value]) => handlePictureChange('borderRadius', value)}
            min={0}
            max={128}
            step={4}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>隐藏头像</Label>
            <Switch
              checked={basics.picture.effects.hidden}
              onCheckedChange={(checked) => handlePictureEffectsChange('hidden', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>显示边框</Label>
            <Switch
              checked={basics.picture.effects.border}
              onCheckedChange={(checked) => handlePictureEffectsChange('border', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>灰度效果</Label>
            <Switch
              checked={basics.picture.effects.grayscale}
              onCheckedChange={(checked) => handlePictureEffectsChange('grayscale', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 