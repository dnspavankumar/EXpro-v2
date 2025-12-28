import React from 'react';
import Section from '../components/Section';
import Toggle from '../components/Toggle';

const ProductivityTools = ({ expanded, onToggle, toggles, onToggleChange }) => {
  return (
    <Section title="Productivity Tools" expanded={expanded} onToggle={onToggle}>
      <Toggle
        label="YouTube Focus Mode"
        description="Remove distractions, block shorts"
        enabled={toggles.focusMode || false}
        onChange={(val) => onToggleChange('focusMode', val)}
      />
      
      <Toggle
        label="Nuclear Mode"
        description="Detect inactivity and suggest actions"
        enabled={toggles.passiveWatching || false}
        onChange={(val) => onToggleChange('passiveWatching', val)}
      />
      
      <Toggle
        label="Live Tracer"
        description="Match tasks to energy levels"
        enabled={toggles.energyScheduling || false}
        onChange={(val) => onToggleChange('energyScheduling', val)}
      />
    </Section>
  );
};

export default ProductivityTools;
