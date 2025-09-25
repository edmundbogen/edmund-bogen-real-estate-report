// Community Data for Territory Pricing
const communitiesData = [
    { name: 'St. Andrews', active: 15, sold: 27, total: 42, soldRatio: 64.3, priceRange: '$2.15M - $10.5M' },
    { name: 'Addison Reserve', active: 11, sold: 23, total: 34, soldRatio: 67.6 },
    { name: 'The Oaks', active: 12, sold: 28, total: 40, soldRatio: 70.0 },
    { name: 'Delaire', active: 3, sold: 17, total: 20, soldRatio: 85.0 },
    { name: 'The Bridges', active: 10, sold: 18, total: 28, soldRatio: 64.3 },
    { name: 'Seven Bridges', active: 14, sold: 28, total: 42, soldRatio: 66.7 },
    { name: 'Boca Grove', active: 7, sold: 13, total: 20, soldRatio: 65.0 },
    { name: 'Boca West', active: 50, sold: 161, total: 211, soldRatio: 76.3 },
    { name: 'Boca Bridges', active: 9, sold: 25, total: 34, soldRatio: 73.5 },
    { name: 'Lotus', active: 18, sold: 33, total: 51, soldRatio: 64.7 },
    { name: 'Bocaire Country Club', active: 13, sold: 18, total: 31, soldRatio: 58.1 },
    { name: 'The Sanctuary', active: 8, sold: 6, total: 14, soldRatio: 42.9 },
    { name: 'Polo Club', active: 14, sold: 54, total: 68, soldRatio: 79.4 },
    { name: 'Mizner Country Club', active: 8, sold: 10, total: 18, soldRatio: 55.6 },
    { name: 'Long Lake Estates', active: 7, sold: 3, total: 10, soldRatio: 30.0 },
    { name: 'Broken Sound', active: 28, sold: 85, total: 113, soldRatio: 75.2 },
    { name: 'Royal Palm Yacht Club', active: 35, sold: 29, total: 64, soldRatio: 45.3 },
    { name: 'Le Lac', active: 0, sold: 0, total: 0, soldRatio: 0 },
    { name: 'Seasons', active: 8, sold: 8, total: 16, soldRatio: 50.0 },
    { name: 'Woodfield', active: 18, sold: 48, total: 66, soldRatio: 72.7 },
    { name: 'Stonebridge', active: 14, sold: 18, total: 32, soldRatio: 56.3 }
].filter(item => item.total > 0); // Filter out communities with no activity

// Enhanced Market Data
const marketData = {
  boca_raton_single_family: {
    inventory: 570,
    inventory_change_yoy: -6,
    closed_sales: 68,
    closed_sales_change_yoy: -29,
    median_price: 2100000,
    median_price_change_yoy: 9,
    days_on_market: 43,
    days_on_market_change: -4,
    sale_to_list_ratio: 93.56,
    price_per_sqft: 614,
    price_per_sqft_change: 4,
    sales_ratio: 12,
    market_condition: "Balanced"
  },
  boca_raton_condos: {
    inventory: 550,
    inventory_change_yoy: -1,
    closed_sales: 50,
    closed_sales_change_yoy: -30,
    median_price: 735000,
    median_price_change_yoy: -11,
    days_on_market: 98,
    days_on_market_change: 263,
    sale_to_list_ratio: 95.28,
    sales_ratio: 9,
    market_condition: "Buyer's Market"
  },
  st_andrews: {
    total_inventory: 15,
    total_value: 83264999,
    median_price: 3700000,
    mean_price: 5551000,
    median_price_per_sqft: 938,
    mean_days_on_market: 61,
    median_days_on_market: 43,
    price_2_5m: 8,
    price_5_10m: 6,
    price_10m_plus: 1,
    waterfront_percentage: 60,
    pool_percentage: 100,
    average_age: 27,
    new_construction: 2,
    top_listing: {
      address: "17903 Foxborough Lane",
      price: 10500000,
      sqft: 7616,
      days_on_market: 142
    }
  },
  international_buyers: {
    canada: 25,
    mexico: 14,
    argentina: 12,
    brazil: 12,
    italy: 12,
    bolivia: 12,
    colombia: 12
  }
};

// Chart.js configuration
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Edmund Bogen Real Estate Report...');

  try {
    initializeTabs();
    console.log('✓ Tabs initialized');
  } catch(e) {
    console.error('Error initializing tabs:', e);
  }

  try {
    animateMetricValues();
    console.log('✓ Metrics animated');
  } catch(e) {
    console.error('Error animating metrics:', e);
  }

  try {
    initializeSparklines();
    console.log('✓ Sparklines initialized');
  } catch(e) {
    console.error('Error initializing sparklines:', e);
  }

  try {
    initializeCharts();
    console.log('✓ Charts initialized');
  } catch(e) {
    console.error('Error initializing charts:', e);
  }

  try {
    initializeCommunitiesChart();
    initializeCommunitiesControls();
    console.log('✓ Communities chart initialized');
  } catch(e) {
    console.error('Error initializing communities chart:', e);
  }

  try {
    initializeInteractiveElements();
    console.log('✓ Interactive elements initialized');
  } catch(e) {
    console.error('Error initializing interactive elements:', e);
  }

  try {
    initializeMapInteraction();
    console.log('✓ Map interaction initialized');
  } catch(e) {
    console.error('Error initializing map interaction:', e);
  }

  try {
    initializeActivityFeed();
    console.log('✓ Activity feed initialized');
  } catch(e) {
    console.error('Error initializing activity feed:', e);
  }

  try {
    initializeFAB();
    console.log('✓ FAB initialized');
  } catch(e) {
    console.error('Error initializing FAB:', e);
  }

  try {
    initializeButtonHandlers();
    console.log('✓ Button handlers initialized');
  } catch(e) {
    console.error('Error initializing button handlers:', e);
  }

  try {
    startLiveUpdates();
    console.log('✓ Live updates started');
  } catch(e) {
    console.error('Error starting live updates:', e);
  }

  console.log('All systems initialization complete!');
});

// Tab Navigation with Enhanced Animation
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  console.log('Found tabs:', tabButtons.length);

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      console.log('Tab clicked:', targetTab);

      // Remove active classes
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active classes
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');

      // Animate content
      anime({
        targets: `#${targetTab}`,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
      });

      // Update charts if needed
      if (targetTab === 'market-overview') {
        updateCharts();
      }
    });
  });
}

// Animate Metric Values
function animateMetricValues() {
  const metricValues = document.querySelectorAll('.metric-value[data-value]');

  metricValues.forEach(element => {
    const targetValue = parseInt(element.getAttribute('data-value'));

    anime({
      targets: element,
      innerHTML: [0, targetValue],
      duration: 2000,
      easing: 'easeInOutExpo',
      round: 1,
      update: function(anim) {
        element.innerHTML = '$' + formatNumber(Math.floor(anim.animations[0].currentValue));
      }
    });
  });
}

// Format numbers with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize Sparkline Charts
function initializeSparklines() {
  // Single Family Sparkline
  const sfCtx = document.getElementById('sparkline-sf');
  if (sfCtx) {
    new Chart(sfCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [1900000, 1950000, 2000000, 2050000, 2080000, 2100000],
          borderColor: '#10b981',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }

  // Condo Sparkline
  const condoCtx = document.getElementById('sparkline-condo');
  if (condoCtx) {
    new Chart(condoCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [825000, 800000, 775000, 760000, 750000, 735000],
          borderColor: '#ef4444',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }

  // St Andrews Sparkline
  const stAndrewsCtx = document.getElementById('sparkline-st-andrews');
  if (stAndrewsCtx) {
    new Chart(stAndrewsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [3200000, 3300000, 3400000, 3500000, 3600000, 3700000],
          borderColor: '#8b5cf6',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }
}

// Initialize Main Charts
function initializeCharts() {
  initializeBocaCharts();
  initializeDelrayCharts();
  initializePriceSegmentCharts();
  // Price Trends Chart
  const trendsCtx = document.getElementById('price-trends-chart');
  if (trendsCtx) {
    new Chart(trendsCtx, {
      type: 'bar',
      data: {
        labels: ['Single Family', 'Condos', 'St Andrews', 'Royal Palm', 'Sanctuary'],
        datasets: [
          {
            label: 'Current Price',
            data: [2100000, 735000, 3700000, 14000000, 15000000],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderRadius: 8
          },
          {
            label: 'Previous Year',
            data: [1926000, 826000, 3400000, 12500000, 13500000],
            backgroundColor: 'rgba(139, 92, 246, 0.8)',
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': $' + formatNumber(context.parsed.y);
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000000).toFixed(1) + 'M';
              }
            }
          }
        }
      }
    });
  }

  // International Buyers Chart
  const intlCtx = document.getElementById('intl-buyers-chart');
  if (intlCtx) {
    new Chart(intlCtx, {
      type: 'doughnut',
      data: {
        labels: ['Canada', 'Mexico', 'Argentina', 'Brazil', 'Italy', 'Bolivia', 'Colombia'],
        datasets: [{
          data: [25, 14, 12, 12, 12, 12, 12],
          backgroundColor: [
            '#3b82f6',
            '#8b5cf6',
            '#ec4899',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#06b6d4'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Update charts (for live data simulation)
function updateCharts() {
  // This could fetch real data and update charts
  console.log('Charts updated');
}

// Interactive Card Hover Effects
function initializeInteractiveElements() {
  const cards = document.querySelectorAll('.interactive-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      anime({
        targets: this.querySelector('.icon-pulse'),
        scale: [1, 1.5],
        opacity: [0.2, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    });

    card.addEventListener('click', function() {
      const metric = this.getAttribute('data-metric');
      showMetricDetails(metric);
    });
  });
}

// Show detailed metric information
function showMetricDetails(metric) {
  console.log('Showing details for:', metric);
  // Could open a modal or expand the card with more details
}

// Initialize Map Interaction
function initializeMapInteraction() {
  console.log('Initializing map interaction...');

  const communities = document.querySelectorAll('.map-community');
  const infoPanel = document.getElementById('community-info');

  // Community click handlers
  communities.forEach(community => {
    community.addEventListener('click', function() {
      const communityName = this.getAttribute('data-community') || this.className.match(/(\w+)-community/)?.[1];
      const info = getCommunityInfo(communityName);

      if (infoPanel) {
        infoPanel.innerHTML = `
          <div class="community-details">
            <h4>${info.name}</h4>
            <p>Median Price: ${info.median}</p>
            <p>Active Listings: ${info.listings}</p>
            <p>Market Trend: ${info.trend}</p>
          </div>
        `;

        anime({
          targets: '.community-details',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 500,
          easing: 'easeOutQuad'
        });
      }
    });
  });

  // Map filter buttons - Fixed
  setTimeout(() => {
    const mapBtns = document.querySelectorAll('.map-btn');
    console.log('Found map buttons:', mapBtns.length);

    mapBtns.forEach((btn, index) => {
      // Remove any existing listeners
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Map filter clicked:', this.getAttribute('data-filter'));

        // Update active state
        document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        filterMapProperties(filter);
      });
    });
  }, 100);
}

// Get community information
function getCommunityInfo(communityName) {
  const info = {
    'st-andrews': {
      name: 'St. Andrews Country Club',
      median: '$3.7M',
      listings: '15',
      trend: 'Strong Growth'
    },
    'royal-palm': {
      name: 'Royal Palm Yacht & CC',
      median: '$7.5M',
      listings: '8',
      trend: 'Ultra Luxury'
    },
    'sanctuary': {
      name: 'The Sanctuary',
      median: '$6.2M',
      listings: '5',
      trend: 'Exclusive'
    },
    'delray': {
      name: 'Delray Beach',
      median: '$2.8M',
      listings: '12',
      trend: 'Growing Market'
    }
  };

  return info[communityName] || { name: 'Unknown', median: 'N/A', listings: '0', trend: 'N/A' };
}

// Filter map properties
function filterMapProperties(filter) {
  console.log('Filtering map by:', filter);

  const allDots = document.querySelectorAll('.property-dots .dot');
  const communities = document.querySelectorAll('.map-community');

  // Reset all styles
  communities.forEach(community => {
    community.style.opacity = '1';
    community.style.filter = 'none';
    community.style.transform = 'scale(1)';
  });

  allDots.forEach(dot => {
    dot.style.opacity = '1';
    dot.style.transform = 'scale(1)';
    dot.style.filter = 'none';
  });

  // Apply filters based on selection
  switch(filter) {
    case 'all':
      console.log('Showing all properties');
      // Everything is already reset, so we're done
      break;

    case 'waterfront':
      console.log('Filtering waterfront properties');
      // Dim non-waterfront communities
      document.querySelectorAll('.st-andrews-community').forEach(c => {
        c.style.opacity = '0.3';
      });
      // Highlight waterfront communities with blue glow
      document.querySelectorAll('.royal-palm-community, .sanctuary-community, .delray-beach-area').forEach(c => {
        c.style.opacity = '1';
        c.style.filter = 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))';
        c.style.transform = 'scale(1.05)';
      });
      break;

    case 'golf':
      console.log('Filtering golf course properties');
      // Highlight golf communities with green glow
      document.querySelectorAll('.st-andrews-community, .royal-palm-community').forEach(c => {
        c.style.opacity = '1';
        c.style.filter = 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))';
        c.style.transform = 'scale(1.05)';
      });
      // Dim non-golf communities
      document.querySelectorAll('.sanctuary-community, .delray-beach-area').forEach(c => {
        c.style.opacity = '0.3';
      });
      break;

    case 'new':
      console.log('Filtering new construction');
      // Dim all communities
      communities.forEach(community => {
        community.style.opacity = '0.4';
      });
      // Highlight luxury properties with pink glow
      document.querySelectorAll('.dot.luxury, .dot.ultra').forEach(dot => {
        dot.style.transform = 'scale(1.8)';
        dot.style.filter = 'drop-shadow(0 0 15px rgba(236, 72, 153, 1))';
        dot.style.opacity = '1';
      });
      // Highlight St Andrews with new construction
      document.querySelector('.st-andrews-community').style.opacity = '0.8';
      document.querySelector('.st-andrews-community').style.filter = 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))';
      break;

    default:
      console.log('Unknown filter:', filter);
  }

  // Smooth animation
  anime({
    targets: '.map-community',
    duration: 600,
    easing: 'easeOutQuad'
  });
}

// Initialize Activity Feed
function initializeActivityFeed() {
  const feedItems = [
    { type: 'new', text: 'New listing in Royal Palm', price: '$14.5M', time: '2 min ago' },
    { type: 'sold', text: 'Property sold at St Andrews', price: '$5.2M', time: '1 hour ago' },
    { type: 'price-change', text: 'Price reduction in Sanctuary', price: 'Now $8.9M', time: '3 hours ago' },
    { type: 'new', text: 'Open house scheduled', price: '$3.8M', time: '4 hours ago' },
    { type: 'sold', text: 'Record sale in Boca Raton', price: '$22M', time: '5 hours ago' }
  ];

  // Simulate adding new feed items
  setInterval(() => {
    addFeedItem(feedItems[Math.floor(Math.random() * feedItems.length)]);
  }, 10000); // Every 10 seconds
}

// Add new feed item
function addFeedItem(item) {
  const feed = document.querySelector('.feed-items');
  if (!feed) return;

  const newItem = document.createElement('div');
  newItem.className = `feed-item ${item.type}`;
  newItem.innerHTML = `
    <div class="feed-icon">
      <i class="fas fa-${item.type === 'new' ? 'home' : item.type === 'sold' ? 'check-circle' : 'tag'}"></i>
    </div>
    <div class="feed-content">
      <span class="feed-text">${item.text}</span>
      <span class="feed-price">${item.price}</span>
      <span class="feed-time">${item.time}</span>
    </div>
  `;

  feed.insertBefore(newItem, feed.firstChild);

  // Remove old items if too many
  if (feed.children.length > 5) {
    feed.removeChild(feed.lastChild);
  }

  // Animate new item
  anime({
    targets: newItem,
    opacity: [0, 1],
    translateX: [-20, 0],
    duration: 500,
    easing: 'easeOutQuad'
  });
}

// Initialize Floating Action Button
function initializeFAB() {
  const mainFab = document.querySelector('.main-fab');
  const fabOptions = document.querySelectorAll('.fab-option');

  if (mainFab) {
    mainFab.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }

  fabOptions.forEach(option => {
    option.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      handleFabAction(action);
    });
  });
}

// Handle FAB actions
function handleFabAction(action) {
  switch(action) {
    case 'compare':
      alert('Property comparison tool coming soon!\nCompare multiple properties side-by-side.');
      break;
    case 'filter':
      // Scroll to map section
      const mapSection = document.getElementById('interactive-map');
      if (mapSection) {
        // First switch to map tab
        const mapTabBtn = document.querySelector('[data-tab="interactive-map"]');
        if (mapTabBtn) {
          mapTabBtn.click();
        }
      }
      break;
    case 'refresh':
      refreshData();
      // Show visual feedback
      showNotification('Data refreshed successfully!');
      break;
  }
}

// Show notification helper
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Refresh data simulation
function refreshData() {
  // Animate refresh
  anime({
    targets: '.metric-card',
    scale: [1, 0.95, 1],
    duration: 600,
    easing: 'easeInOutQuad',
    delay: anime.stagger(100)
  });

  // Update last update time
  document.getElementById('last-update').textContent = 'Just now';

  // Re-animate values
  animateMetricValues();
}

// Start live updates
function startLiveUpdates() {
  // Update last update time
  setInterval(() => {
    const lastUpdate = document.getElementById('last-update');
    if (lastUpdate) {
      const minutes = Math.floor(Math.random() * 5) + 1;
      lastUpdate.textContent = `${minutes} min ago`;
    }
  }, 30000);

  // Animate market health gauge
  const gaugeFill = document.querySelector('.gauge-fill');
  if (gaugeFill) {
    setInterval(() => {
      const newValue = 100 + Math.floor(Math.random() * 50);
      gaugeFill.style.strokeDashoffset = newValue;
    }, 5000);
  }
}

// Initialize all button handlers
function initializeButtonHandlers() {
  console.log('Initializing button handlers...');

  // Export functionality
  const exportBtn = document.querySelector('.btn-export');
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      console.log('Export button clicked');
      alert('Report export feature - PDF download will be available soon!');
    });
  }

  // Share functionality
  const shareBtn = document.querySelector('.btn-share');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      console.log('Share button clicked');
      const shareUrl = window.location.href;
      if (navigator.share) {
        navigator.share({
          title: 'Edmund Bogen Real Estate Report',
          text: 'Check out this exclusive luxury market analysis',
          url: shareUrl
        }).catch(err => console.log('Share failed:', err));
      } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('Report link copied to clipboard!');
        }).catch(() => {
          alert('Share URL: ' + shareUrl);
        });
      }
    });
  }

  // Contact functionality
  const contactBtn = document.querySelector('.btn-contact');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      console.log('Contact button clicked');
      alert('Contact Edmund Bogen\nLuxury Real Estate Specialist\n\nPhone: (561) XXX-XXXX\nEmail: edmund@luxuryrealestate.com');
    });
  }

  console.log('Button handlers initialized');
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize distribution bar animations
window.addEventListener('scroll', () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    if (isInViewport(bar) && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      const height = bar.style.height;
      bar.style.height = '0';

      anime({
        targets: bar,
        height: height,
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  });
});

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  const tabs = document.querySelectorAll('.tab-btn');
  const activeTab = document.querySelector('.tab-btn.active');
  const activeIndex = Array.from(tabs).indexOf(activeTab);

  if (e.key === 'ArrowLeft' && activeIndex > 0) {
    tabs[activeIndex - 1].click();
  } else if (e.key === 'ArrowRight' && activeIndex < tabs.length - 1) {
    tabs[activeIndex + 1].click();
  }
});

// Initialize Boca Raton Charts
function initializeBocaCharts() {
  const bocaTrendsCtx = document.getElementById('boca-trends-chart');
  if (bocaTrendsCtx) {
    new Chart(bocaTrendsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Single Family Homes',
            data: [1950000, 1980000, 2000000, 2020000, 2040000, 2060000, 2070000, 2080000, 2090000, 2095000, 2098000, 2100000],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Luxury Condos',
            data: [825000, 810000, 795000, 780000, 765000, 750000, 745000, 740000, 738000, 736000, 735500, 735000],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000000).toFixed(1) + 'M';
              }
            }
          }
        }
      }
    });
  }
}

// Initialize Delray Beach Charts
function initializeDelrayCharts() {
  const comparisonCtx = document.getElementById('comparison-chart');
  if (comparisonCtx) {
    new Chart(comparisonCtx, {
      type: 'radar',
      data: {
        labels: ['Price Growth', 'Sales Volume', 'Days on Market', 'Inventory', 'Sale/List Ratio', 'Market Health'],
        datasets: [
          {
            label: 'Delray Beach',
            data: [85, 70, 75, 65, 99, 80],
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            pointBackgroundColor: '#06b6d4'
          },
          {
            label: 'Boca Raton',
            data: [75, 60, 85, 70, 94, 75],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            pointBackgroundColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}

// Initialize Price Segment Charts
function initializePriceSegmentCharts() {
  // Entry Luxury Chart
  const entryCtx = document.getElementById('tier-entry-chart');
  if (entryCtx) {
    new Chart(entryCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sold', 'Active', 'Pending'],
        datasets: [{
          data: [45, 40, 15],
          backgroundColor: ['#10b981', '#3b82f6', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // Mid Luxury Chart
  const midCtx = document.getElementById('tier-mid-chart');
  if (midCtx) {
    new Chart(midCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sold', 'Active', 'Pending'],
        datasets: [{
          data: [30, 55, 15],
          backgroundColor: ['#10b981', '#3b82f6', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // High Luxury Chart
  const highCtx = document.getElementById('tier-high-chart');
  if (highCtx) {
    new Chart(highCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sold', 'Active', 'Pending'],
        datasets: [{
          data: [20, 65, 15],
          backgroundColor: ['#10b981', '#8b5cf6', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // Ultra Luxury Chart
  const ultraCtx = document.getElementById('tier-ultra-chart');
  if (ultraCtx) {
    new Chart(ultraCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sold', 'Active', 'Pending'],
        datasets: [{
          data: [5, 85, 10],
          backgroundColor: ['#10b981', '#ec4899', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // Price Matrix Chart
  const matrixCtx = document.getElementById('price-matrix-chart');
  if (matrixCtx) {
    new Chart(matrixCtx, {
      type: 'bar',
      data: {
        labels: ['$1M-$2.5M', '$2.5M-$5M', '$5M-$10M', '$10M+'],
        datasets: [
          {
            label: 'Sales Volume',
            data: [45, 30, 20, 5],
            backgroundColor: '#3b82f6'
          },
          {
            label: 'Inventory',
            data: [320, 185, 78, 22],
            backgroundColor: '#8b5cf6'
          },
          {
            label: 'Days on Market',
            data: [52, 68, 95, 142],
            backgroundColor: '#ec4899'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}

// Initialize Communities Chart with Enhanced Styling
function initializeCommunitiesChart() {
  const ctx = document.getElementById('communities-chart');
  if (!ctx) return;

  const sortedData = [...communitiesData].sort((a, b) => b.total - a.total);

  // Create gradient fills
  const ctxElement = ctx.getContext('2d');

  const gradientSold = ctxElement.createLinearGradient(0, 0, 0, 400);
  gradientSold.addColorStop(0, 'rgba(30, 41, 59, 0.9)');
  gradientSold.addColorStop(1, 'rgba(30, 41, 59, 0.6)');

  const gradientActive = ctxElement.createLinearGradient(0, 0, 0, 400);
  gradientActive.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
  gradientActive.addColorStop(1, 'rgba(245, 158, 11, 0.6)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedData.map(c => c.name),
      datasets: [
        {
          label: 'Properties Sold',
          data: sortedData.map(c => c.sold),
          backgroundColor: gradientSold,
          borderRadius: 6,
          borderWidth: 0,
          barThickness: 'flex',
          maxBarThickness: 40
        },
        {
          label: 'Active Listings',
          data: sortedData.map(c => c.active),
          backgroundColor: gradientActive,
          borderRadius: 6,
          borderWidth: 0,
          barThickness: 'flex',
          maxBarThickness: 40
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          left: 10,
          right: 10
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            padding: 20,
            font: {
              size: 14,
              weight: '600',
              family: "'Inter', -apple-system, sans-serif"
            },
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleFont: { size: 14, weight: 'bold' },
          bodyFont: { size: 13 },
          padding: 15,
          cornerRadius: 10,
          displayColors: true,
          callbacks: {
            afterLabel: function(context) {
              const index = context.dataIndex;
              const community = sortedData[index];
              return [
                `Total Activity: ${community.total}`,
                `Sold Ratio: ${community.soldRatio}%`,
                community.priceRange ? `Price Range: ${community.priceRange}` : ''
              ].filter(Boolean);
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45,
            font: {
              size: 12,
              weight: '600'
            },
            color: '#64748b'
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)',
            drawBorder: false
          },
          ticks: {
            font: {
              size: 12,
              weight: '500'
            },
            color: '#64748b'
          },
          title: {
            display: true,
            text: 'Number of Properties',
            font: {
              size: 14,
              weight: '600'
            },
            color: '#1e293b'
          }
        }
      }
    }
  });
}

// Initialize Communities Controls
function initializeCommunitiesControls() {
  const viewButtons = document.querySelectorAll('.viz-btn');
  const sortSelector = document.getElementById('community-sort');
  const chartContainer = document.getElementById('communities-bar-chart');
  const tableContainer = document.getElementById('communities-table');
  const cardsContainer = document.getElementById('communities-cards');

  // View Toggle Buttons
  viewButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      viewButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Hide all containers
      if (chartContainer) chartContainer.classList.remove('active');
      if (tableContainer) tableContainer.classList.remove('active');
      if (cardsContainer) cardsContainer.classList.remove('active');

      // Show selected view
      const view = this.getAttribute('data-view');
      if (view === 'table') {
        tableContainer.classList.add('active');
        populateCommunitiesTable();
      } else if (view === 'cards') {
        cardsContainer.classList.add('active');
        populateCommunitiesCards();
      } else {
        chartContainer.classList.add('active');
      }
    });
  });

  // Sort Control
  if (sortSelector) {
    sortSelector.addEventListener('change', function() {
      updateCommunitiesChart(this.value);
    });
  }

  // Animate value counters
  animateInsightValues();
}

// Populate Communities Table
function populateCommunitiesTable() {
  const tbody = document.getElementById('communities-table-body');
  if (!tbody) return;

  tbody.innerHTML = communitiesData.map(community => {
    const trend = community.soldRatio > 70 ? 'Hot' :
                  community.soldRatio > 50 ? 'Active' : 'Slow';
    const trendColor = trend === 'Hot' ? '#ef4444' :
                       trend === 'Active' ? '#f59e0b' : '#6b7280';

    return `
      <tr>
        <td style="font-weight: 600">${community.name}</td>
        <td>${community.active}</td>
        <td>${community.sold}</td>
        <td>${community.total}</td>
        <td><span style="color: ${community.soldRatio > 65 ? '#10b981' : '#6b7280'}">${community.soldRatio}%</span></td>
        <td><span style="color: ${trendColor}; font-weight: 600">${trend}</span></td>
      </tr>
    `;
  }).join('');
}

// Update Communities Chart with Sorting
function updateCommunitiesChart(sortBy) {
  const ctx = document.getElementById('communities-chart');
  if (!ctx) return;

  let sortedData = [...communitiesData];

  switch(sortBy) {
    case 'active':
      sortedData.sort((a, b) => b.active - a.active);
      break;
    case 'sold':
      sortedData.sort((a, b) => b.sold - a.sold);
      break;
    case 'total':
      sortedData.sort((a, b) => b.total - a.total);
      break;
    case 'ratio':
      sortedData.sort((a, b) => b.soldRatio - a.soldRatio);
      break;
    default:
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Get the existing chart instance and update it
  const chartInstance = Chart.getChart(ctx);
  if (chartInstance) {
    chartInstance.data.labels = sortedData.map(c => c.name);
    chartInstance.data.datasets[0].data = sortedData.map(c => c.sold);
    chartInstance.data.datasets[1].data = sortedData.map(c => c.active);
    chartInstance.update();
  }
}

// Populate Communities Cards View
function populateCommunitiesCards() {
  const container = document.getElementById('communities-cards');
  if (!container) return;

  container.innerHTML = communitiesData.map(community => {
    const performanceClass = community.soldRatio > 70 ? 'hot' :
                           community.soldRatio > 50 ? 'active' : 'slow';

    return `
      <div class="community-card ${performanceClass}">
        <div class="community-card-header">
          <h4>${community.name}</h4>
          ${community.priceRange ? `<span class="price-range">${community.priceRange}</span>` : ''}
        </div>
        <div class="community-card-body">
          <div class="community-stat">
            <span class="stat-label">Active</span>
            <span class="stat-value">${community.active}</span>
          </div>
          <div class="community-stat">
            <span class="stat-label">Sold</span>
            <span class="stat-value">${community.sold}</span>
          </div>
          <div class="community-stat highlight">
            <span class="stat-label">Performance</span>
            <span class="stat-value">${community.soldRatio}%</span>
          </div>
        </div>
        <div class="community-card-footer">
          <div class="activity-bar">
            <div class="activity-fill" style="width: ${community.soldRatio}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Animate Insight Values
function animateInsightValues() {
  const valueElements = document.querySelectorAll('.card-value[data-value]');

  valueElements.forEach(element => {
    const target = parseInt(element.getAttribute('data-value'));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.round(current).toLocaleString();
    }, 30);
  });
}

console.log('Luxury Market Interactive Dashboard Initialized');