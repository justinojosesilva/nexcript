# Test Plan: M6-01 E2E completo Trends → Export

## Executive Summary
End-to-end testing for the complete Nexcript workflow from Trends analysis through Export ZIP generation. This test validates the entire content production pipeline and ensures data integrity across all modules.

**Priority:** P0 Critical  
**Complexity:** High  
**Estimated Duration:** <30 minutes per full flow  
**Sprint:** Sprint 5

---

## Test Scope

### In Scope
- Complete Trends → Export workflow
- All 7 ContentProject status transitions
- Data persistence across modules
- ZIP file generation and contents
- ComplianceScore calculation and export
- UI/API integration points

### Out of Scope
- Load testing (multi-concurrent users)
- Automated UI testing (Playwright)
- Performance benchmarking
- Mobile device testing

---

## Test Environment Requirements

### Prerequisites
- Staging/test API running (http://localhost:3002)
- Frontend running (http://localhost:3001)
- Redis running
- PostgreSQL test database
- BullMQ worker running
- Test user account with organization

### Test Data
- Test channel profile (YouTube)
- Test niche: "Finance"
- Test keyword: "Bitcoin Market Analysis"
- Duration: 10 minutes

---

## Critical Path User Flows

### Flow 1: Trends Analysis
- Start: Dashboard
- Action: Click "New Project"
- End: TrendAnalysis with keyword, geo, niche

### Flow 2: Script Generation
- Start: Project page with TrendAnalysis
- Action: Click "Generate Script"
- End: Script with blocks and estimated duration

### Flow 3: Narration Synthesis
- Start: Project with approved Script
- Action: Select voice, click "Generate Narration"
- End: Narration with audio URL

### Flow 4: Media Selection
- Start: Project page
- Action: Go to Media, search and select assets for each block
- End: Selected media marked in database

### Flow 5: Publication Metadata
- Start: Project page
- Action: Set title, tags, description
- End: PublicationMetadata saved

### Flow 6: Compliance Check (Optional)
- Start: Project page
- Action: Click "Verificar Compliance"
- End: ComplianceScore calculated

### Flow 7: Export & Download
- Start: Project page (all prerequisites met)
- Action: Click "Exportar Projeto", wait for completion, download ZIP
- End: ZIP file with all project data

---

## Status Transition Validation

| Step | Expected Status | Duration | API Endpoint |
|------|-----------------|----------|--------------|
| Create project | `DRAFT` | Immediate | POST /projects |
| Analyze trends | `ANALYZING` | ~5s (mocked) | POST /trends |
| Generate script | `SCRIPTING` | ~10s (API call) | POST /scripts |
| Generate narration | `NARRATING` | ~15s (API call) | POST /narrations |
| Search media | `MEDIA_SEARCH` | ~5s | PUT /media/{id}/select |
| Complete setup | `READY` | Immediate | (no API call) |
| Export project | `EXPORTED` | ~20s (worker) | POST /export |

---

## Test Cases

### TC-E2E-001: Complete Workflow (Happy Path)
**Objective:** Verify entire Trends → Export flow completes successfully  
**Priority:** P0 Critical  
**Time:** ~30 minutes

#### Steps:
1. [Start] Dashboard
2. [Create] New project: "Bitcoin Market Analysis"
3. [Analyze] Trends with keyword "bitcoin", geo "BR", niche "Finance"
4. [Generate] Script from trend analysis
5. [Verify] Script approved status
6. [Generate] Narration with voice selection
7. [Select] Media for each script block (minimum 1 per block)
8. [Set] Publication title, tags, description
9. [Verify] Compliance score calculated
10. [Export] Project → download ZIP
11. [Inspect] ZIP contents and verify all JSON files
12. [Validate] ContentProject status is EXPORTED

---

### TC-E2E-002: Status Transitions
**Objective:** Verify all 7 status transitions occur correctly  
**Priority:** P0 Critical

#### Expected Transitions:
```
DRAFT
  ↓ [Create project]
ANALYZING
  ↓ [Trends analysis done]
SCRIPTING
  ↓ [Script approved]
NARRATING
  ↓ [Narration completed]
MEDIA_SEARCH
  ↓ [Media selected]
READY
  ↓ [All prerequisites met]
EXPORTED
  ↓ [Export job completed]
```

---

### TC-E2E-003: ZIP Contents Validation
**Objective:** Verify exported ZIP contains correct files and data  
**Priority:** P0 Critical

#### Files to Verify:
1. **script.json**
   - Contains: id, projectId, formatType, blocks[], wordCount, estimatedDurationSec
   - Blocks have: label, content, duration, startTime

2. **narration.json**
   - Contains: id, audioUrl, provider, voiceId, durationSec

3. **selectedAssets.json**
   - Contains array of: id, type (image/video), url, prompt, metadata

4. **publicationMetadata.json**
   - Contains: id, title, description, tags[], thumbnailUrl, platform, complianceScore, checklistResults

---

### TC-E2E-004: Compliance Score Persistence
**Objective:** Verify ComplianceScore calculated and present in export  
**Priority:** P0 Critical

#### Checks:
- Compliance score exists in publicationMetadata.json
- Score is numeric (0-100)
- ComplianceScore saved to PublicationMetadata table
- Warnings generated if score < 60 in any dimension

---

### TC-E2E-005: Error Recovery
**Objective:** Verify workflow handles errors gracefully  
**Priority:** P1 High

#### Scenarios:
1. Cancel narration mid-process → can retry
2. No media selected → export blocked with 422
3. No title set → export blocked with 422
4. Export fails → can retry without re-doing all steps

---

## Test Data Template

```
Project Name: Bitcoin Market Analysis
Keyword: bitcoin
Niche: Finance
Geo: BR (Brazil)
Duration: 10 minutes
Format: long_form

Voice Selection: (Pick any available)
- Provider: ElevenLabs
- Voice ID: (test voice)

Media: Minimum 1 per block
- Type: Mix of images and videos
- Source: Pexels/Pixabay
- Selection criteria: Relevant to keyword

Publication Data:
- Title: "Bitcoin Market Analysis - April 2026"
- Tags: ["crypto", "finance", "bitcoin"]
- Description: "A comprehensive analysis of Bitcoin market trends"
- Platform: YouTube
```

---

## Execution Checklist

- [ ] Environment ready (API, DB, Redis, Worker running)
- [ ] Test user account logged in
- [ ] Start time recorded
- [ ] TC-E2E-001: Complete workflow executed
- [ ] TC-E2E-002: All status transitions verified
- [ ] TC-E2E-003: ZIP downloaded and contents validated
- [ ] TC-E2E-004: ComplianceScore present in export
- [ ] TC-E2E-005: Error scenarios tested
- [ ] End time recorded
- [ ] Total flow time < 30 minutes
- [ ] All test cases passed/documented

---

## Pass/Fail Criteria

### PASS:
- All 7 status transitions occur in correct order
- ZIP file generated and downloadable
- All 4 JSON files present in ZIP
- ComplianceScore calculated and exported
- Total flow time < 30 minutes
- No data loss or corruption

### FAIL (Block Release):
- Status transition sequence incorrect
- ZIP missing required files
- Corrupted JSON data
- ComplianceScore missing
- Workflow hangs or errors

### CONDITIONAL:
- Minor UI issues (documented for future sprint)
- Export takes 30-35 minutes (acceptable, document optimization)

---

## Known Issues & Workarounds

| Issue | Workaround | Status |
|-------|-----------|--------|
| TBD | TBD | Open |

---

## Test Artifacts

- This test plan
- Executed test run report
- Screenshots of each major step
- Downloaded ZIP file (for inspection)
- JSON content samples from ZIP

---

## Sign-Off

**Tested By:** [QA Engineer Name]  
**Date:** [Execution Date]  
**Result:** [ ] PASS [ ] FAIL [ ] CONDITIONAL  
**Notes:** [Any observations or blockers]
