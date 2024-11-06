import React, { useEffect, useState } from 'react';

const useTabChangeDetect = (callback, timesAllowed = 0) => {
	const [tabSwitchCount, setTabSwitchCount] = useState(0);

	useEffect(() => {
		if (tabSwitchCount > timesAllowed) {
			callback();
			setTabSwitchCount(0);
		}
	}, [tabSwitchCount]);

	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			setTabSwitchCount(tabSwitchCount + 1);
		}
	});

	window.addEventListener('blur', () => {
		if (window.visibilityState === 'hidden') {
			setTabSwitchCount(tabSwitchCount + 1);
		}
	});

	return () => {
		document.removeEventListener('visibilitychange', () => {});
		window.removeEventListener('blur', () => {});
	};
};

export default useTabChangeDetect;
