<template>
  <div className="header">
    <div className="menu">{{ $t('common.header.demo') }}</div>
    <div className="buttons"><ColorModeButton /><LanguageButton /></div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  justify-content: space-between;
}
</style>
